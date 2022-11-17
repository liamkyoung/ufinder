import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import UserProfileInfo from '../components/UserProfileInfo'
import UserData from '../data/user.json'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

type Props = {
  primary: boolean
}

function UserProfile({ primary }: Props) {
  const Data = useSelector((state: RootState) => state.currentMessenger.value)
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Profile" />
      <Header primary={true} />
      <div className="flex justify-center items-center mt-8">
        <UserProfileInfo
          name={Data.name}
          age={Data.age}
          interests={Data.similarInterests}
          primary={primary}
        />
      </div>
    </div>
  )
}

export default UserProfile
