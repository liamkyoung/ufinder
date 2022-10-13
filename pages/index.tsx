import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import HeadMetaData from '../components/HeadMetaData'
import Front from '../components/Front'

const Home: NextPage = () => {
  return (
    <div className="page h-14 bg-gradient-to-r from-green-200 to-cyan-200">
      <HeadMetaData title="UFinder | Home" />
      <Header />
      <Front />
    </div>
  )
}

export default Home
