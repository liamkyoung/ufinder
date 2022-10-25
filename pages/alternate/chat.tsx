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
import HobbyCircle from '../../components/HobbyCircle'
import MessengerInactive from '../../components/MessengerInactive'

const Chat: NextPage = () => {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Alternate Chat" />
      <Header primary={false} />
      <div className="">
        {currMessenger?.id === -1 ? (
          <div>
            <div className="m-10">
              <MessengerInactive />
            </div>

            <h1 className="text-3xl text-black font-cartoon text-center mt-10">
              Your Communities
            </h1>
            <div className="flex justify-between md:m-16 lg:m-20 2xl:m-24 pl-32 pt-8">
              <div className="m-5">
                <HobbyCircle
                  hobby="Soccer"
                  friends={Data.friendData.filter(
                    (friend) => !friend.anonymous
                  )}
                />
              </div>
              <div className="m-5">
                <HobbyCircle
                  hobby="Painting"
                  friends={AnonData.friendData.filter(
                    (friend) => friend.anonymous
                  )}
                />
              </div>
              <div className="m-5">
                <HobbyCircle
                  hobby="Tennis"
                  friends={AnonData.friendData.filter(
                    (friend) => friend.anonymous
                  )}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-10">
            <AnonymousMessenger />
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat
