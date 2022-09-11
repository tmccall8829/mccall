import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tom McCall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          👋🏻 I'm Tom.
        </h1>

        <p className="description">
          I'm a software engineer on the data team at <a href="https://www.huntclub.com">Hunt Club.</a>
        </p>

        <div className="grid">
          <a
            href="https://github.com/tmccall8829"
            className="priorityCard"
            target="_blank"
          >
            <h3>GitHub &rarr;</h3>
            <p>Check out my latest projects.
              Please? 🙏🏻
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/thomasemorymccall/"
            className="card"
            target="_blank"
          >
            <h3>LinkedIn &rarr;</h3>
            <p>How many connections u got? I got millions.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
