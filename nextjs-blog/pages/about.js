import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstEcho()
{
    return (
        <>
            <Head>
                <title>About Page</title>
                {/* Here we can also add third party libraries */}
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}

const YourComponent = () => (
    <Image
        src="/images/profile.jpg"
        height = {144}
        width = {144}
        alit="Your Name"
    />
);