import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {getOnlinePlayers} from "../lib/playercount";
import {useInterval} from "../lib/utils";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [onlineText, setOnlineText] = useState<string>();

    useEffect(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, [onlineText]);

    useInterval(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, 10000);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>

                <meta name="description" content="6b6t - Home"/>
                <meta name="keywords" content="6b6t Official website"/>
                <meta name="author" content="Nate Legault and Pistonmaster"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

                <title>6b6t</title>

                {/*
                <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
                    new Crate({
                    server: '917520262797344779',
                    channel: '917520263384563717',
                    color: '#000',
                    location: ['bottom', 'right']
                })
                    crate.notify('Click me to chat on the 6b6t discord server!')
                </script>*/}
            </Head>
            <header className="header">
                <div className="container">
                    <ul>
                        <li className="logo">
                            <Link href="/">
                                <a>
                                    <img src="logo.png" alt="logo" height="64px" width="64px"/>
                                </a>
                            </Link>
                        </li>
                        <li className="navbutton">
                            <span className="online">Online: {onlineText}</span>
                        </li>
                        <li className="navbutton">
                            <Link href="/">
                                <a className="nav">
                                    Home
                                </a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </header>

            <div className="container clearfix">
                <div className="content">
                    <article className="article animated slideInUp">
                        <h1>About:</h1>
                        <ul>
                            <li>IP: 6b6t.org</li>
                            <li>Versions: 1.8.x to 1.18.x (1.12.2 Recommended)</li>
                            <li>CPU: AMD Ryzen 9 5950X</li>
                            <li>RAM: 128GB DDR4</li>
                            <li>STORAGE: 2x2TB NVMe SSD Gen 4.0</li>
                            <li>DDOS Protection: Path.net</li>
                            <li>6b6t is a non-vanilla cracked anarchy server with no rules which means everything is
                                allowed and you
                                cannot get punished (No bans or mutes or kicks).
                            </li>
                        </ul>
                        <br/>

                        <h1>Discord:</h1>
                        <p>
                            Join the 6b6t.org Official Discord Server to keep up with the latest updates with the
                            server:
                            <a href="https://dsc.gg/6b6t.org" target="_blank">https://dsc.gg/6b6t.org</a>
                        </p>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
