import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { CiFaceSmile } from 'react-icons/ci'
import { FcBusinessman } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'
import { FcRating } from 'react-icons/fc'
import { FcSportsMode } from 'react-icons/fc'
import { FcGlobe } from 'react-icons/fc'
import { FcLandscape } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { FcAutomotive } from 'react-icons/fc'
import { FcEngineering } from 'react-icons/fc'
import { FcBusinesswoman } from 'react-icons/fc'
import { FcCloseUpMode } from 'react-icons/fc'
import { FcBiomass } from 'react-icons/fc'
import { FcBrokenLink } from 'react-icons/fc'
import { FcDebian } from 'react-icons/fc'
import { FcDislike } from 'react-icons/fc'
import Data from '../data/friends.json'
import Emoji from './Emoji'

type Message = {
  id: number
  text: string
  timestamp: number
}

export type Friend = {
  id: number
  name: string
  online: boolean
  anonymous: boolean
  favorite: boolean
  lastLogin: number
  age: number
  icon: string
  mood: string
  similarInterests: string[]
  messages: Message[]
}

const Meeting1: NextPage = () => {
  const setIcon = (friend: Friend) => {
    if (!friend.icon) return <FcLikePlaceholder />
    if (friend.icon === 'businessman') return <FcBusinessman />
    if (friend.icon === 'rating') return <FcRating />
    if (friend.icon === 'sportmode') return <FcSportsMode />
    if (friend.icon === 'globe') return <FcGlobe />
    if (friend.icon === 'landscape') return <FcLandscape />
    if (friend.icon === 'flashon') return <FcFlashOn />
    if (friend.icon === 'automotive') return <FcAutomotive />

    return <FcLikePlaceholder />
  }

  const setMood = (friend: Friend) => {
    if (friend.mood === 'happy') return <Emoji emoji="&#x1f602;" />
    if (friend.mood === 'medium') return <Emoji emoji="&#x1f610;" />
    if (friend.mood === 'sad') return <Emoji emoji="&#x1f641;" />
  }

  const friendMap = (index: number) => {
    const res = Data.friendData.map((friend, i) => {
      if (i % 3 !== index) return <></>

      return (
        <div className="col-lg-4 p-5" key={i}>
          <div className="feature-box  flex ">
            <label className="swap swap-flip text-5xl mr-3">
              <input type="checkbox" />
              <div className="swap-on">{setMood(friend)}</div>
              <div className="swap-off">{setIcon(friend)}</div>
            </label>
            <div className="flex items-center justify-between flex-1 mt-1">
              <h2 className="font-bold text-xl">{friend.name}</h2>
              <h4 className="text-right min-w-max">
                ❤️ {friend.similarInterests[0]}
              </h4>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            {friend.online ? (
              <p className="text-green-600 bg-green-300 p-1 rounded-md">
                Online
              </p>
            ) : (
              <p className="text-red-700 bg-red-200 p-1 rounded-md">Offline</p>
            )}
            <h1 className="text-white bg-gray-500 font-bold p-1 rounded-md">
              Age: {friend.age}
            </h1>
          </div>
        </div>
      )
    })

    return res
  }

  return (
    <div className="container" id="features">
      <div className="col-lg-6">
        <h2 className=" text-center font-cartoon">Meet Each Other!</h2>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="conversationBox1 input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex justify-center space-x-10">
        <div className="rounded border-[#6495ed] border-4 bg-[#f6f9fa]">
          {friendMap(0)}
        </div>

        <div className="rounded border-[#6495ed] border-4 static bg-[#f6f9fa]">
          {friendMap(1)}
        </div>

        <div className="rounded border-[#6495ed] border-4 static bg-[#f6f9fa]">
          {friendMap(2)}
        </div>
      </div>
    </div>
  )
}

export default Meeting1
