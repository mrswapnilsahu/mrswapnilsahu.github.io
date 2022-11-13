import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swapnil Sahu</title>
        <meta name="description" content="Swapnil Sahu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className='text-red-400'>Let's build Portfolio finally!</p>
    </div>
  )
}
