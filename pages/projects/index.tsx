import { Roboto } from '@next/font/google'
import AppBar from 'components/appbar-component'
import Head from 'next/head'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export default function App() {
  return (
    <>
      <Head>
        <title>Coders</title>
        <meta name="description" content="Coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <AppBar />
      </main>
    </>
  )
}
