import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, canonical, ogimage, ...props }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="author" content="Rafael Gomes" />
            <meta name="copyright" content="Rafael Gomes" />
            <meta name="theme-color" content="#090909" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{title}</title>

            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <link rel="icon" href="favicon.ico" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={ogimage} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogimage} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            <meta
                name="keywords"
                content="Bless Barbershop, Barbershop, hairstyle, haircut, vintage, style, barbearia, cabelo, corte de cabelo, estilo, barbershop website, Rafael Gomes, desenvolvedor front-end, front-end, front-end developer, personal website, developer, sites"
            />
        </Head>
    );
};

export default Meta;
