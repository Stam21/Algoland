import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Algoland - About</title>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Layout />
        <h1>About</h1> 
      </div>
  )
}
