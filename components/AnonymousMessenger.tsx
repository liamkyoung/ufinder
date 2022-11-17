import React, { useState } from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import {
  setCurrMessenger,
  resetCurrMessenger,
} from '../redux/slices/currMessengerSlice'
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

function AnonymousMessenger({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  const dispatch = useDispatch()
  const [currMessage, setMessage] = useState('')
  const currInterests = currMessenger?.similarInterests.join(', ')

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
        title={`Block ${currMessenger?.name}?`}
        subtitle="User will not be able to send you messages, view your profile, or connect with you once blocked."
        handler={resetCurrMessenger}
        id="block-modal"
        button1={['btn btn-error', 'Block']}
        button2={['btn btn-info', 'Go Back']}
      />
      <Modal
        title={`Add ${currMessenger?.name} as a friend?`}
        subtitle={`You will exchange information like name and age with ${currMessenger?.name}, and they will appear on your friend's list.`}
        handler={resetCurrMessenger}
        id="add-modal"
        button1={['btn btn-success', 'Add Friend']}
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
          <div className="flex items-center flex-1 justify-center">
            <QuestionMarkCircleIcon
              className={`h-12 ${
                currMessenger.online ? 'text-pageGreen' : 'text-gray-800'
              }`}
            />
            <Link href="/alternate/profile">
              <div className="pl-5 cursor-pointer">
                <h1 className="text-zinc-100 font-bold text-xl text-center">
                  {currMessenger?.name}
                </h1>
                <div className="flex items-center">
                  <HeartIcon className="h-4 text-red-600" />
                  <h3 className="text-zinc-100 text-sm italic mx-2">
                    {currInterests}
                  </h3>
                  <HeartIcon className="h-4 text-red-600" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-end">
            {currMessenger.anonymous ? (
              <a href="#add-modal">
                <div className="iconButton">
                  <UserPlusIcon className="h-6 text-zinc-100" />
                </div>
              </a>
            ) : null}

            <a href="#block-modal">
              <div className="iconButton">
                <XCircleIcon className="h-6 text-zinc-100" />
              </div>
            </a>
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
              placeholder="Send message"
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

export default AnonymousMessenger
