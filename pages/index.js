import Head from 'next/head'
// import Footer from '../components/footer'
import FancyText from '../components/fancyText'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Tom McCall</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <FancyText>
          <h1>
            tommccall.dev
          </h1>
        </FancyText>

        <p className='description'>
          Hi, I'm Tom McCall ✌🏻 I'm a software engineer on the data team at <a href='https://www.huntclub.com' target='_blank'>Hunt Club.</a>
        </p>

        <div className='grid'>
          <a
            href='https://github.com/tmccall8829'
            className='priorityCard'
            target='_blank'
          >
            <h3>GitHub &rarr;</h3>
            <p>Check out my latest projects 🙏🏻</p>
          </a>

          <a
            href='https://www.linkedin.com/in/thomasemorymccall/'
            className='card'
            target='_blank'
          >
            <h3>LinkedIn &rarr;</h3>
            <p>If you're into that kind of thing 🥴</p>
          </a>

          <a href='/playground/' className='card' target='_blank'>
            <h3>Playground &rarr;</h3>
            <p>A bunch of games made by little 🤖</p>
          </a>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
