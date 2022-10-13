import React from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'

type Props = {
  messages: Message[]
}

type Message = {
  id: number
  text: string
  timestamp: number
}

function Messenger({ messages }: Props) {
  return (
    <div className="w-full min-h-max bg-pageGray rounded-xl shadow-sm">
      <div className="flex">
        {/* Header */}
        <div
          id="messenger-header"
          className="flex justify-between items-center w-full p-5 h-min sticky top-0"
        >
          <ChevronLeftIcon className="h-8 text-zinc-100" />
          <div className="flex items-center">
            <FaceSmileIcon className="h-12 text-pageGreen pr-2" />
            <h1 className="text-zinc-100 font-bold text-xl">Zakaria Maria</h1>
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
      {/* Messages */}
      <div className="divider px-10">OR</div>
      <div className="p-5 overflow-y-scroll max-h-80">
        <Message user={true} text="user text" />
        <Message user={false} text="other text" />
        <Message
          user={false}
          text="Sint ad consectetur officia ea cupidatat nostrud est labore sit incididunt."
        />
        <Message
          user={true}
          text="Labore minim do tempor fugiat consequat ad irure cillum eiusmod Lorem exercitation consequat. Aliquip eu sit aliquip ullamco deserunt consectetur Lorem in commodo veniam sit nostrud. Excepteur sit incididunt deserunt cupidatat aliquip ipsum mollit quis culpa dolor nulla labore consectetur.."
        />
        <Message
          user={false}
          text="Labore minim do tempor fugiat consequat ad irure cillum eiusmod Lorem exercitation consequat. Aliquip eu sit aliquip ullamco deserunt consectetur Lorem in commodo veniam sit nostrud. Excepteur sit incididunt deserunt cupidatat aliquip ipsum mollit quis culpa dolor nulla labore consectetur.."
        />
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

export default Messenger
