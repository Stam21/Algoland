import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout() {
    return (
        <div>
            <Head>
                <title>Algoland</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Navbar />
        </div>
        
        // Here Footer also will be placed because
        // both of this components are static renderic
    )
}