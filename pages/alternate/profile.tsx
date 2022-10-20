import React from 'react'
import type { NextPage } from 'next'
import Header from '../../components/Header'
import HeadMetaData from '../../components/HeadMetaData'
import ProfileInfo from '../../components/ProfileInfo'
import Data from '../../data/user.json'

const Profile: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Profile" />
      <Header primary={false} />
      <div className="flex justify-center items-center mt-8">
        <ProfileInfo
          name={Data.user.name}
          age={Data.user.age}
          similarInterests={Data.user.similarInterests}
          otherInterests={Data.user.otherInterests}
        />
      </div>
    </div>
  )
}

export default Profile
