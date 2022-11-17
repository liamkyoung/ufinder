import React from 'react'
import type { NextPage } from 'next'
import Header from '../../components/Header'
import HeadMetaData from '../../components/HeadMetaData'
import UserProfileInfo from '../../components/UserProfileInfo'
import ProfileInfo from '../../components/ProfileInfo'
import UserData from '../../data/user.json'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Profile: NextPage = () => {
  const Data = useSelector((state: RootState) => state.currentMessenger.value)
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Profile" />
      <Header primary={false} />
      <div className="flex justify-center items-center mt-8">
        {Data.id === 999 ? (
          <UserProfileInfo
            name={Data.name}
            age={Data.age}
            interests={Data.similarInterests}
            primary={false}
          />
        ) : (
          <ProfileInfo
            name={Data.name}
            age={Data.age}
            similarInterests={Data.similarInterests}
            otherInterests={UserData.similarInterests.filter((interest) =>
              UserData.similarInterests.includes(interest)
            )}
            primary={false}
          />
        )}
      </div>
    </div>
  )
}

export default Profile
