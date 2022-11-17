import React, { useState } from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
  MoonIcon,
  NoSymbolIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import {
  setCurrMessenger,
  resetCurrMessenger,
} from '../redux/slices/currMessengerSlice'
import fs from 'fs'
import Data from '../data/friends.json'
import Modal from '../components/Modal'
import Link from 'next/link'

type Props = {}

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

function MessengerActive({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  const dispatch = useDispatch()
  const [currMessage, setMessage] = useState('')
  const [currFavorite, setFavorite] = useState(currMessenger.favorite)

  const sendMessage = () => {
    let fileData: Friend[] = Data.friendData
    let foundFriend: Friend = {
      id: -1,
      name: '',
      online: false,
      favorite: false,
      icon: '',
      mood: 'happy',
      age: 20,
      anonymous: false,
      lastLogin: Date.now(),
      similarInterests: [],
      messages: [],
    }

    for (let i = 0; i < fileData.length; i++) {
      if (fileData[i].id === currMessenger.id) {
        Object.assign(foundFriend, fileData[i])
        foundFriend.messages = [
          ...foundFriend.messages,
          { id: 0, text: currMessage, timestamp: Date.now() },
        ]
        break
      }
    }

    if (foundFriend.id !== -1) dispatch(setCurrMessenger(foundFriend))

    setMessage('')
  }

  return (
    <div className="w-full min-h-max bg-pageGray rounded-xl shadow-sm">
      <Modal
        title={`Add ${currMessenger?.name} as a friend?`}
        subtitle={''}
        handler={resetCurrMessenger}
        id="add-friend-modal"
        button1={['btn btn-success', 'Add to Friend List']}
        button2={['btn btn-error', 'Exit']}
      />
      <Modal
        title={`Block ${currMessenger?.name}?`}
        subtitle="User will not be able to send you messages, view your profile, or connect with you once blocked."
        handler={resetCurrMessenger}
        id="block-modal"
        button1={['btn btn-error', 'Block']}
        button2={['btn btn-info', 'Go Back']}
      />

      <div className="flex">
        {/* Header */}
        <div
          id="messenger-header"
          className={`flex justify-between items-center w-full p-5 h-min sticky top-0 shadow-lg`}
        >
          <ChevronLeftIcon
            className="h-8 text-zinc-100 cursor-pointer hover:text-zinc-400"
            onClick={() => dispatch(resetCurrMessenger())}
          />
          <div className="flex items-center">
            {currMessenger?.online ? (
              <FaceSmileIcon className={`h-10  pr-2 text-pageGreen`} />
            ) : (
              <MoonIcon className={`h-6  pr-2 text-pageBlue`} />
            )}
            <div>
              <Link href="/profile">
                <h1 className="text-zinc-100 font-bold text-xl text-center cursor-pointer">
                  {currMessenger?.name}
                </h1>
              </Link>

              <div className="flex items-center">
                <HeartIcon className="h-4 text-red-600 pl-2" />
                <h1 className="text-sm text-zinc-100 italic">
                  {currMessenger.similarInterests.join(', ')}
                </h1>
                <HeartIcon className="h-4 text-red-600" />
              </div>
            </div>
          </div>
          <div className="flex">
            <a href="#add-friend-modal">
              <div className="iconButton">
                <UserPlusIcon className="h-6 text-zinc-100" />
              </div>
            </a>

            <a href="#block-modal">
              <div className="iconButton">
                <NoSymbolIcon className="h-6 text-zinc-100" />
              </div>
            </a>
            <div
              className={
                currMessenger.favorite ? 'activeIconButton' : 'iconButton'
              }
            >
              {' '}
              <StarIcon className="h-6 text-zinc-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 overflow-y-scroll max-h-80 shadow-lg">
        {/* Messages */}
        <div className="divider px-10">
          {new Date(currMessenger?.lastLogin).toLocaleDateString()}
        </div>
        {currMessenger?.messages.map((msg, i) => (
          <Message
            key={i}
            user={msg.id == 0 ? true : false}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      {/* Send Message */}
      <div className="flex justify-end p-3">
        <div className="form-control w-full">
          <div className="input-group w-full">
            <input
              type="text"
              placeholder=""
              className="input input-bordered flex-1"
              onChange={(e) => setMessage(e.target.value)}
              value={currMessage}
            />
            <button className="btn btn-square btn-info" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessengerActive
