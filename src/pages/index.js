import Head from 'next/head'
import Image from 'next/image'

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
              <div className="mt-1">
                <Image src="/aleph-icon.png" width="52px" height="16px" />
              </div>
            </div>
          </div>

          <p className="mb-4 mt-12 font-bold">Projects</p>
          <div className="">
            <a
              href="https://github.com/rub1cc/layar"
              className="inline-block border-b border-white"
            >
              Layar
            </a>
            <p className="mt-2" style={{ opacity: 0.6 }}>
              Free DevTools for web developers — Open your web in multiple screen sizes at once.
            </p>
          </div>
          <div className=" mt-4">
            <a href="https://menukami.com" className="inline-block border-b border-white">
              Menukami
            </a>
            <p className="mt-2" style={{ opacity: 0.6 }}>
              Digital menu for your business
            </p>
          </div>
          <div className=" mt-4">
            <a
              href="https://github.com/rub1cc/supaflow"
              className="inline-block border-b border-white"
            >
              Supaflow
            </a>
            <p className="mt-2" style={{ opacity: 0.6 }}>
              Platform to create a step-by-step tutorial with ease
            </p>
          </div>

          <p className="mb-4 mt-12 font-bold">Links</p>
          <div className="flex flex-col gap-2 text-white " style={{ opacity: 0.6 }}>
            <a href="https://linkedin.com/in/rub1cc" rel="noopener noreferrer" target="_blank">
              Linkedin
            </a>
            <a href="https://twitter.com/rub1cc" rel="noopener noreferrer" target="_blank">
              Twitter
            </a>
            <a href="https://github.com/rub1cc" rel="noopener noreferrer" target="_blank">
              Github
            </a>
            <a href="https://medium.com/@rub1cc" rel="noopener noreferrer" target="_blank">
              Medium
            </a>
            <a href="https://s.id/faraz" rel="noopener noreferrer" target="_blank">
              Resume
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
