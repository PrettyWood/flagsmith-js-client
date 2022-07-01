import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";

const Color: NextPage = () => {
    const router = useRouter()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main>
          Account {router.query.color}
      </main>
    </div>
  )
}

export default Color
