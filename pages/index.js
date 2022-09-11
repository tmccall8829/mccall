import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          👋🏻 I'm Tom.
        </h1>

        <p className="description">
          I'm a software engineer on the data team at {' '}
          <a href="https://www.huntclub.com">
            Hunt Club{' '}
            <Image src="/images/hc-icon.ico" height={20} width={20} />
          </a>
        </p>

        <div className="grid">
          <a
            href="https://github.com/tmccall8829"
            className="priorityCard"
          >
            <h3>GitHub &rarr;</h3>
            <p>Check out my latest projects.
              Please? 🙏🏻
            </p>
          </a>

          <a href="https://nextjs.org/docs" className="card">
            <h3>Blog &rarr;</h3>
            <p>Paragraphs, punctuation, pizzazz. You know, all that stuff.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>LinkedIn &rarr;</h3>
            <p>How many connections u got? I got millions.</p>
          </a>
        </div>
      </main>

      <footer>
        <h1>
          ✌🏻💛🐶
        </h1>
      </footer>
    </div>
  )
}
