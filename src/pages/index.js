import Head from 'next/head';
import { Inter } from 'next/font/google';
import HomeBless from '@/components/home';
import About from '@/components/about';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HomeBless />
                <About />
            </main>
        </>
    );
}
