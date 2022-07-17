
import Layout from '../components/Layout'
import BubbleSort from '../components/BubbleSort'
import styles from '../styles/Home.module.css'

export default function Sorting() {
  const numbers = [1,2,3,4345,23,523,65,235,764]
  return (
      <div className={styles.container}>

        <Layout />
        <h1>Sorting</h1>
        <BubbleSort items={numbers} /> 
      </div>
  )
}
