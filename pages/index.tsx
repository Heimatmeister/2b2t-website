import type {NextPage} from 'next'
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <h2>About</h2>
            <ul className="mb-2">
                <li>IP: 2b2t.com.de & 2b2t.de.com</li>
                <li>Versions: 1.8.x to 1.18.x (1.12.2 Recommended)</li>
                <li>CPU: AMD Ryzen 7 3700X</li>
                <li>RAM: 64GB DDR4</li>
                <li>STORAGE: 2x8TB HDDs</li>
                <li>DDOS Protection: cosmicguard</li>
                <li>2builders2tools Germany is a minecraft server that promises its players vanilla survival gameplay with PvP, 
                    a neverending world and no rules. The IP is 2b2t.de.com or 2b2t.com.de. It has been on the same world since April 2022..
                </li>
            </ul>

            <h2>Popular questions</h2>

            <h3>What is 2b2t germany?</h3>
            <p>
                2builders2tools Germany is a minecraft server that promises its players vanilla survival gameplay with PvP, 
                    a neverending world and no rules. The IP is 2b2t.de.com or 2b2t.com.de. It has been on the same world since April 2022.
            </p>

            <h3>What is 2b2t Germany seed?</h3>
            <p>6b6t seed is the same as 2b2t seed: -4172144997902289642</p>

            <h3>Is hacking allowed?</h3>
            <p>Yes, as mentioned above, there are truly no rules.</p>

            <h3>Are lag machines allowed?</h3>
            <p>
                Yes, Heimatmeister already patched most of the lag machines.
            </p>
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
