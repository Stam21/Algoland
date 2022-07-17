import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Algoland - Home</title>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Layout />
        <h1>Home</h1>
      </div>
  )
}
