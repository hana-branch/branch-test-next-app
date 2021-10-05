import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Branch Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Branch Test Next App</h1>
        <h3>
          Go{' '}
          <Link href="/colors/red">
            <a>Red</a>
          </Link>
        </h3>
        <h3>
          Go{' '}
          <Link href="/colors/blue">
            <a>Blue</a>
          </Link>
        </h3>
      </main>
    </div>
  )
}
