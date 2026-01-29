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
        <meta property="og:url" content="https://rub1.cc" />
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

      <main className="flex w-screen h-screen items-center justify-center text-white bg-black antialiased mx-auto font-noto p-8">
        <section className="p-2">
          <div>
            <p className="text-xl font-bold">Faraz Aulia</p>
            <div className="flex items-center gap-2">
              <p>Frontend Engineer at</p>
              <a
                href="https://www.newfireglobal.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block"
              >
                <img
                  src="https://www.newfireglobal.com/wp-content/uploads/2020/07/NewfireGP_main_grey.svg"
                  alt="Newfire Global"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <p className="mb-4 mt-12 font-bold">Projects</p>
          <div className="">
            <a
              href="https://github.com/rub1cc/barcc"
              className="inline-block border-b border-white"
            >
              barcc
            </a>
            <p className="mt-2" style={{ opacity: 0.6 }}>
              Native macOS menu bar app that tracks Claude Code usage & costs in real time.
            </p>
          </div>
          <div className=" mt-4">
            <a
              href="https://github.com/rub1cc/layar"
              className="inline-block border-b border-white"
            >
              Layar
            </a>
            <p className="mt-2" style={{ opacity: 0.6 }}>
              DevTools for web developers: open your web in multiple screen sizes at once.
            </p>
          </div>

          <p className="mb-4 mt-12 font-bold">Links</p>
          <div className="flex flex-col gap-2 text-white " style={{ opacity: 0.6 }}>
            <a
              href="https://linkedin.com/in/rub1cc"
              rel="noopener noreferrer"
              target="_blank"
              className="self-start"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/rub1cc"
              rel="noopener noreferrer"
              target="_blank"
              className="self-start"
            >
              Twitter
            </a>
            <a
              href="https://github.com/rub1cc"
              rel="noopener noreferrer"
              target="_blank"
              className="self-start"
            >
              Github
            </a>
            <a
              href="https://medium.com/@rub1cc"
              rel="noopener noreferrer"
              target="_blank"
              className="self-start"
            >
              Medium
            </a>
            <a
              href="https://s.id/faraz"
              rel="noopener noreferrer"
              target="_blank"
              className="self-start"
            >
              Resume
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
