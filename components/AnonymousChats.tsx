import React, { useState } from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrMessenger } from '../redux/slices/currMessengerSlice'
import type { RootState } from '../redux/store'

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
  friends: Friend[]
}

function AnonymousChats({ friends }: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  const search = useSelector((state: RootState) => state.search.value)
  const dispatch = useDispatch()
  let onlineFriends = 0
  const friendNames = friends?.map((f, i) => {
    if (search !== '' && !f.name.includes(search)) return

    const offlineHours = new Date(f.lastLogin).getHours()
    return (
      <li
        key={i}
        className={
          f.online
            ? 'border-l-4 border-b-0 border-pageOrange'
            : 'border-l-4 border-b-0 border-red-700'
        }
        value={f.name}
        onClick={() => dispatch(setCurrMessenger(f))}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            {f.online ? (
              <FaceSmileIcon className="h-8 text-white mr-2" />
            ) : null}
            <a className={f.online ? `font-bold` : `italic opacity-70`}>
              {f.name}
            </a>
          </div>

          {f.online ? (
            <a className="badge badge-md bg-success text-black">Online</a>
          ) : (
            <a className="text-sm italic opacity-70">
              Last Online:{' '}
              {offlineHours > 1 ? `${offlineHours} hours ago` : ' <1 hour ago'}
            </a>
          )}
        </div>
      </li>
    )
  })

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].online) onlineFriends++
  }

  return (
    <div className="max-h-80">
      <h2 className="chatTitle mt-5 font-cartoon">
        {onlineFriends} Anonymous Messages
      </h2>
      <ul className="menu bg-base-100 rounded-box mt-1">{friendNames}</ul>
    </div>
  )
}

export default AnonymousChats
