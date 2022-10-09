import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'

const Interests: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Meet" />
      <Header />
    </div>
  )
}

export default Interests
