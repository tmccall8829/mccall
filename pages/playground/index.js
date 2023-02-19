import Head from 'next/head'
// import Footer from '../../components/footer'
import FancyText from '../../components/fancyText'

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Playground</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <FancyText>
                    <h1 className='title'>
                        Welcome to the playground!
                    </h1>
                </FancyText>
                <h1>
                    Currently under construction 🚀
                </h1>

                <div className='grid'>
                    <a href='/playground/bee' className='priorityCard'>
                        <h3>NYTimes Spelling Bee Solver &rarr;</h3>
                        <p>The 🥇 way to become a 👸🐝</p>
                    </a>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}
