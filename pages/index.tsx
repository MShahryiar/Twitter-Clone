import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      {/* <h1>Hello, Next, Twitter, Sanity. Yayy</h1> */}
      <main>
        {/* Sidebar */}
        <SideBar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
      </main>
    </div>
  )
} 

export default Home
