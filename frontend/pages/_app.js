import '../styles/Globals.scss'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

//Since on every page we need navigation bar & footer, 
//we add it here on root function.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />  
      <Component {...pageProps} />
      <Footer />
    </>

  ) 
  
}

export default MyApp