import React from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import { setCurrMessenger } from '../redux/slices/currMessengerSlice'
import Data from '../data/friends.json'

type Props = {}
type Friend = {
  id: number
  name: string
  online: boolean
  anonymous: boolean
  favorite: boolean
  lastLogin: number
  similarInterests: string[]
  messages: Message[]
}

type Message = {
  id: number
  text: string
  timestamp: number
}

function MessengerInactive({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  const dispatch = useDispatch()
  const randomFriend: Friend =
    Data.friendData[Math.floor(Math.random() * Data.friendData.length)]
  return (
    <div className="w-full min-h-max bg-pageGray font-cartoon rounded-xl shadow-sm h-80">
      <div className="flex justify-center items-center text-center flex-1 h-full">
        <h1
          className="text-2xl text-white font-bold btn btn-success"
          onClick={() => dispatch(setCurrMessenger(randomFriend))}
        >
          Start Chatting!
        </h1>
      </div>
    </div>
  )
}

export default MessengerInactive
