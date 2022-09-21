import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
// import { AccessKey } from '../unsplash.config.js';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const initalFetch = await axios.get(
    `https://api.unsplash.com/photos?client_id=${process.env.API_KEY}`
  );

  const actualData = initalFetch.data;

  return {
    props: {
      actualData,
    },
  };
}

const DynamicList = dynamic(() => import('../components/ImageList.js'), {
  suspense: true,
});

export default function Home({ actualData }) {
  const [imageState, setImageState] = useState(actualData);
  const productionKey = API_KEY;

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  const getPhotos = (key) => {
    return axios.get(`https://api.unsplash.com/photos/random?count=10`, {
      headers: {
        Authorization: `Client-ID ${key}`,
      },
    });
  };

  const getImages = async (key) => {
    console.log(key);
    try {
      const list = await getPhotos(key);
      let newList = list.data;
      setImageState((prevState) => [...prevState, ...newList]);
    } catch (error) {
      console.error('this is the error', error);
    }
  };

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollTop + window.innerHeight + 1 >
      e.target.documentElement.scrollHeight
    ) {
      getImages(productionKey);
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
        <Suspense fallback={`Loading...`}>
          {!imageState ? null : <DynamicList imageState={imageState} />}
        </Suspense>
      </main>

      <footer className={styles.footer}>
        Created by&nbsp;<a className={styles.myGithub}>MarcAnthony Petrecca</a>
      </footer>
    </div>
  );
}
