import Head from 'next/head';
import { Inter } from 'next/font/google';
import HomeBless from '@/components/home';
import About from '@/components/about';
import BookNow from '@/components/bookNow';
import Services from '@/components/servicesSec';
import Image from 'next/image';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';
import Grooming from '@/components/grooming';
import Header from '@/components/header';

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
                <BookNow />
                <Services />
                {/*<Grooming />
                <Team />
                <Testimonials />
                <Footer /> */}
            </main>
        </>
    );
}
