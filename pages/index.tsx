import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import HeadMetaData from '../components/HeadMetaData'
import Front from '../components/Front'

const Home: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Home" />
      <Header primary={true} />
      <Front interestLink="/interests" friendsLink="/meet" />
    </div>
  )
}

export default Home
