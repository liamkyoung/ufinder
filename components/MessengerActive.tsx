import React from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
  MoonIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import { resetCurrMessenger } from '../redux/slices/currMessengerSlice'

type Props = {}

function MessengerActive({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  const dispatch = useDispatch()
  //  ${currMessenger.id === -1 ? 'hidden' : ''}
  return (
    <div className="w-full min-h-max bg-pageGray rounded-xl shadow-sm">
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

            <h1 className="text-zinc-100 font-bold text-xl">
              {currMessenger?.name}
            </h1>
          </div>
          <div className="flex">
            <div className="iconButton">
              <UserPlusIcon className="h-6 text-zinc-100" />
            </div>
            <div className="iconButton">
              <UserMinusIcon className="h-6 text-zinc-100" />
            </div>
            <div className="iconButton">
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
            />
            <button className="btn btn-square">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessengerActive
