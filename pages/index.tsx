import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-8xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      {/* <h1>Hello, Next, Twitter, Sanity. Yayy</h1> */}
      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <SideBar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
} 

export default Home
