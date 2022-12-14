import React, { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import RecentChats from '../components/RecentChats'
import Data from '../data/friends.json'
import Messenger from '../components/Messenger'
import Modal from '../components/Modal'

const Chat: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Chat" />
      <Header primary={true} />
      <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 min-w-min">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1">
          <h1 className="chatTitle font-cartoon">Recent Chats</h1>
          <RecentChats
            friends={Data.friendData.filter((friend) => !friend.anonymous)}
          />
        </div>
        {/* Chats */}
        <div className="col-span-full md:col-span-2 p-5 md:p-10 row-span-2">
          <Messenger />
        </div>
      </div>
    </div>
  )
}

export default Chat
