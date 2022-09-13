import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import SideBar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props{
  tweets:Tweet[]
}

const Home = ({tweets}:Props) => {
  
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-8xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      {/* <h1>Hello, Next, Twitter, Sanity. Yayy</h1> */}

      <Toaster/>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <SideBar/>
        {/* Feed */}
        <Feed tweets={tweets}/>
        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
} 

export default Home

export const getServerSideProps : GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props:{
      tweets,
    }
  }
}