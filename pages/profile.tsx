import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'

const Profile: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Profile" />
      <Header />
    </div>
  )
}

export default Profile
