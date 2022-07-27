import { useState, useEffect } from 'react';
import { getPhotos } from '../api/api.js';
import Head from 'next/head';
import Image from 'next/image';
import ImageCard from '../components/ImageCard.js';
import ImageList from '../components/ImageList.js';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [imageState, setImageState] = useState([]);

  const getImages = async () => {
    try {
      const list = await getPhotos();
      setImageState([...imageState, list]);
    } catch (error) {
      console.error(error);
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

        {/* <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
