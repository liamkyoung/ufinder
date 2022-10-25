import React, { useState } from 'react'
import {
  FcBusinessman,
  FcLikePlaceholder,
  FcRating,
  FcSportsMode,
  FcGlobe,
  FcLandscape,
  FcFlashOn,
  FcAutomotive,
  FcEngineering,
} from 'react-icons/fc'
import { CiFaceSmile } from 'react-icons/ci'
import Emoji from './Emoji'

type Friend = {
  id: number
  name: string
  online: boolean
  anonymous: boolean
  favorite: boolean
  lastLogin: number
  icon: string
  mood: string
  age: number
  similarInterests: string[]
  messages: Message[]
}

type Message = {
  id: number
  text: string
  timestamp: number
}

type Props = {
  friend: Friend
}

function MeetProfile({ friend }: Props) {
  const setIcon = () => {
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

  const setMood = () => {
    if (friend.mood === 'happy') return <Emoji emoji="&#x1f602;" />
    if (friend.mood === 'medium') return <Emoji emoji="&#x1f610;" />
    if (friend.mood === 'sad') return <Emoji emoji="&#x1f641;" />
  }

  const icon = setIcon()
  const mood = setMood()

  return (
    <div>
      <div className="feature-box col-lg-4">
        <label className="swap swap-flip text-5xl">
          <input type="checkbox" />
          <div className="swap-on">{mood}</div>
          <div className="swap-off">{icon}</div>
        </label>
        <div className="flex justify-between">
          <h2 className="feature-title">{friend.name}</h2>
          <h3>Age: {friend.age}</h3>
        </div>
        <div className="flex justify-between">
          {friend.online ? (
            <p className="text-green-600">Online</p>
          ) : (
            <p>Last Online: {new Date(friend.lastLogin).getHours()}</p>
          )}

          <h4>❤️ {friend.similarInterests.join(', ')}</h4>
        </div>
      </div>
    </div>
  )
}

export default MeetProfile
