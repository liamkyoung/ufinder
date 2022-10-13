import React, { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import RecentChats from '../components/RecentChats'
import Data from '../data/friends.json'
import Messenger from '../components/Messenger'

const Chat: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Chat" />
      <Header />
      <div className="grid grid-cols-3 grid-rows-2 min-w-min">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1">
          <h1 className="chatTitle">Recent Chats</h1>
          <RecentChats headers={Data.headers} friends={Data.friendData} />
        </div>
        {/* Chats */}
        <div className="col-span-full md:col-span-2 p-5 md:p-10 row-span-2">
          <h1 className="chatTitle">Messenger</h1>
          <Messenger />
        </div>
      </div>
    </div>
  )
}

export default Chat
