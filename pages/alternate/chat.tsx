import React from 'react'
import type { NextPage } from 'next'
import AnonymousMessenger from '../../components/AnonymousMessenger'
import Header from '../../components/Header'
import HeadMetaData from '../../components/HeadMetaData'
import RecentChats from '../../components/RecentChats'
import AnonData from '../../data/friendsAnon.json'
import Data from '../../data/friends.json'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import AnonymousChats from '../../components/AnonymousChats'

const Chat: NextPage = () => {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Alternate Chat" />
      <Header primary={false} />
      <div className="grid m-5 md:m-16 lg:m-20 2xl:m-24">
        {currMessenger?.id === -1 ? (
          <div className="">
            <RecentChats
              friends={Data.friendData.filter((friend) => !friend.anonymous)}
            />
            <div className="pt-2">
              {' '}
              <AnonymousChats
                friends={AnonData.friendData.filter(
                  (friend) => friend.anonymous
                )}
              />
            </div>
          </div>
        ) : (
          <AnonymousMessenger />
        )}
      </div>
    </div>
  )
}

export default Chat
