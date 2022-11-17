import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import ProfileInfo from '../components/ProfileInfo'
import UserData from '../data/user.json'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import UserProfileInfo from '../components/UserProfileInfo'

const Profile: NextPage = () => {
  const Data = useSelector((state: RootState) => state.currentMessenger.value)
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Profile" />
      <Header primary={true} />
      <div className="flex justify-center items-center mt-8">
        {Data.id === 999 ? (
          <UserProfileInfo
            name={Data.name}
            age={Data.age}
            interests={Data.similarInterests}
            primary={true}
          />
        ) : (
          <ProfileInfo
            name={Data.name}
            age={Data.age}
            similarInterests={Data.similarInterests}
            otherInterests={Data.similarInterests.filter(
              (interest) => !UserData.similarInterests.includes(interest)
            )}
            primary={true}
          />
        )}
      </div>
    </div>
  )
}

export default Profile
