import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Faraz Aulia</title>
        <meta name="title" content="Faraz Aulia" />
        <meta
          name="description"
          content="Front-end developer currently living in Jakarta, Indonesia."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frza.me" />
        <meta property="og:title" content="Faraz Aulia" />
        <meta
          property="og:description"
          content="Front-end developer currently living in Jakarta, Indonesia."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frza.me" />
        <meta property="twitter:title" content="Faraz Aulia" />
        <meta
          property="twitter:description"
          content="Front-end developer currently living in Jakarta, Indonesia."
        />
        <meta property="twitter:image" content="" />
      </Head>

      <main className="flex w-screen h-screen items-center justify-center text-gray-900 antialiased max-w-lg mx-auto font-noto p-8">
        <section className="text-xl md:text-2xl flex flex-col space-y-10">
          <p>Hi — I’m Faraz Aulia.</p>
          <p>
            A front-end developer. Currently, I live in Jakarta and have fun at{' '}
            <a
              href="https://jakevo.jakarta.go.id"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              JakEvo
            </a>
            . I also love playing bass guitar.
          </p>

          <div className="space-x-6 text-gray-600 text-base">
            <a
              href="https://twitter.com/farazaulia"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://github.com/farazaulia"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://medium.com/@farazaulia"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Medium
            </a>
            <a
              href="https://www.notion.so/Hello-I-m-Faraz-ed24ed325c3047a59f46d3f80559416b"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
