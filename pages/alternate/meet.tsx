import React from 'react'
import type { NextPage } from 'next'
import Header from '../../components/Header'
import HeadMetaData from '../../components/HeadMetaData'
import Meeting2 from '../../components/Meeting2'

const Meet: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Meet" />
      <Header />
      <Meeting2 />
    </div>
  )
}

export default Meet
