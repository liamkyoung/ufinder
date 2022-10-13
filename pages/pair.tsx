import React from 'react'
import type { NextPage } from 'next'
import HeadMetaData from '../components/HeadMetaData'
import Header from '../components/Header'

const Pair: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Pair" />
      <Header />
    </div>
  )
}

export default Pair
