import React, { useState } from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import {
  setCurrMessenger,
  resetCurrMessenger,
} from '../redux/slices/currMessengerSlice'
import AnonymousData from '../data/anonymous.json'
import Modal from '../components/Modal'

type Props = {}

type Friend = {
  id: number
  name: string
  online: boolean
  lastLogin: number
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
    let fileData: Friend[] = AnonymousData.friendData
    let foundFriend: Friend = {
      id: -1,
      name: '',
      online: false,
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
  }

  return (
    <div className="w-full min-h-max bg-pageGray rounded-xl shadow-sm">
      <Modal
        title={`Block ${currMessenger?.name}?`}
        subtitle="User will not be able to send you messages, view your profile, or connect with you once blocked."
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
            <QuestionMarkCircleIcon className="h-12 text-pageGreen" />
            <div className="pl-5">
              <h1 className="text-zinc-100 font-bold text-xl">
                {currMessenger?.name}
              </h1>
              <h2 className="text-zinc-100 text-sm font-bold">
                Similar Interests:
              </h2>
              <h3 className="text-zinc-100 text-sm italic">{currInterests}</h3>
            </div>
          </div>
          <div className="flex items-end">
            <div className="iconButton">
              <UserPlusIcon className="h-6 text-zinc-100" />
            </div>
            <a href="#my-modal-2">
              <div className="iconButton">
                <UserMinusIcon className="h-6 text-zinc-100" />
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

export default AnonymousMessenger
