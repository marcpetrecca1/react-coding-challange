import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AccessKey } from '../unsplash.config';
import Head from 'next/head';
import Image from 'next/image';
import ImageList from '../components/ImageList.js';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const initalFetch = await axios.get(
    `https://api.unsplash.com/photos?client_id=${AccessKey}`
  );

  const actualData = initalFetch.data;

  return {
    props: {
      actualData,
    },
  };
}

export default function Home({ actualData }) {
  const [imageState, setImageState] = useState(actualData);
  const [page, setPage] = useState(1);

  useEffect(() => getImages, []);

  const getPhotos = () => {
    return axios.get(`https://api.unsplash.com/photos?client_id=${AccessKey}`);
  };

  const getImages = async () => {
    try {
      const list = await getPhotos();
      setImageState([...imageState, list.data]);
    } catch (error) {
      console.error('this is the error', error);
    }
  };

  const infiniteScroll = () => {
    // End of the document reached?
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      // let newPage = this.state.page;
      // newPage++;
      // this.setState({
      //   page: newPage,
      // });
      setPage(page++);
      // this.fetchData(newPage);
      getImages();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Replash</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Resplash! &#40;Using{' '}
          <a
            href='https://unsplash.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Unsplash
          </a>{' '}
          API&#41;
        </h1>

        <p className={styles.description}>
          I do not claim ownership of the images on this page
        </p>

        {!imageState ? null : <ImageList imageState={imageState} />}
      </main>

      <footer className={styles.footer}>
        Created by&nbsp;<a className={styles.myGithub}>MarcAnthony Petrecca</a>
      </footer>
    </div>
  );
}
