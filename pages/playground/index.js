import Head from 'next/head'
import Footer from '../../components/footer'

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Playground</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1 className='title'>
                    Welcome to the playground 🎡
                </h1>

                <div className='grid'>
                    <a href='/playground/bee' className='card'>
                        <h3>NYTimes Spelling Bee Solver &rarr;</h3>
                        <p>The 🥇 way to become a 👸🐝</p>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}
