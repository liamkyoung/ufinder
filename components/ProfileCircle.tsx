import React, { useState } from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { setCurrMessenger } from '../redux/slices/currMessengerSlice'

type Position = {
  x: number
  y: number
}

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
  pos: Position
  friend: Friend
}

function ProfileCircle({ friend, pos }: Props) {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  return (
    <div
      className={`w-12 h-12 absolute rounded-full hover:cursor-pointer ${
        friend.online ? 'bg-green-600' : 'bg-red-600'
      }`}
      style={{ top: `${pos.y}px`, left: `${pos.x}px` }}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      onClick={() => dispatch(setCurrMessenger(friend))}
    >
      <FaceSmileIcon className="h-full text-zinc-100" />
      {visible ? (
        <div className="bg-slate-500 min-w-fit rounded-lg text-center flex items-center px-5 justify-between">
          <h1 className="font-cartoon text-lg p-3 text-black">
            {friend?.name}
          </h1>
          {friend.online ? (
            <h1 className="text-green-300 text-lg italic">Online</h1>
          ) : (
            <h1 className="text-red-700 text-lg italic">Offline</h1>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default ProfileCircle
