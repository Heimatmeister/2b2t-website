import Head from "next/head";

export default function SEOHeader() {
    const seoTitle = '2builders 2tools';
    const seoDescription = '2builders2tools is a minecraft server with the goal to never reset the world in a free for all no rules pvp environment, with little modification to the vanilla survival gamemode.';
    const seoImage = 'https://6b6t.org/logo.png';
    const seoUrl = 'https://www.2b2t.com.de';

    return (
        <Head>
            <title>{seoTitle}</title>
            <link rel="icon" href="/favicon.ico"/>

            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <meta name="keywords"
                  content="2b2t, german 2b2t, 2b2t alternative, anarchy minecraft server, anarchy server like 2b2t"/>
            <meta name="author" content="AlexProgrammerDE"/>
            <meta name="description" content={seoDescription}/>

            <meta name="og:type" content="website"/>
            <meta name="og:url" content={seoUrl}/>
            <meta name="og:title" content={seoTitle}/>
            <meta name="og:url" content={seoUrl}/>
            <meta name="og:description" content={seoDescription}/>
            <meta name="og:image" content={seoImage}/>

            <meta name="theme-color" content={"#3D45CD"}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content={seoUrl}/>
            <meta name="twitter:title" content={seoTitle}/>
            <meta name="twitter:description" content={seoDescription}/>
            <meta name="twitter:image" content={seoImage}/>
            <meta name="twitter:image:alt" content="6b6t logo"/>

            <meta name="format-detection" content="telephone=no"/>
        </Head>
    )
}
