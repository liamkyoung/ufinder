import React, { useState } from 'react'
import { UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Data from '../data/pairdata.json'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/slices/pairStateSlice'

type Props = {}

function AfterPair({}: Props) {
  const randomIndex = Math.floor(Math.random() * Data.friends.length)
  const [randomFriend, setRandomFriend] = useState(Data.friends[randomIndex])
  const dispatch = useDispatch()
  return (
    <div className="centerFlexCol text-black font-poppins">
      <h1 className="md:text-4xl text-3xl font-bold">Match Found!</h1>
      {/* Pair Box */}
      <div>
        <div className="border-4 border-pageOrange min-w-max p-5 flex justify-between mt-5 text-lg lg:text-2xl rounded-lg bg-pageOrange bg-opacity-30">
          <div className="centerFlexCol mr-5">
            <UserIcon className="scaleSmallIcons" />
            <h1 className="">You</h1>
          </div>
          <div className="h-92 border-4 border-pageOrange rounded-lg"></div>
          <div className="centerFlexCol ml-5">
            <QuestionMarkCircleIcon className="scaleSmallIcons" />
            <h1 className="">{randomFriend.name}</h1>
          </div>
        </div>
        <div className="h-24 w-full border-pageOrange border-4 rounded-lg bg-pageOrange bg-opacity-30 flex flex-col items-center justify-center text-lg">
          <h1>
            <b>Common Interests:</b>
          </h1>
          <h1>{randomFriend.similarInterests.join(', ')}</h1>
        </div>
      </div>

      <div className="p-5 flex justify-center">
        <Link href="/chat">
          <button className="btn btn-info mr-1 md:mr-5 xl:mr-32">
            Click to Chat
          </button>
        </Link>

        <Link href="/profile">
          <button className="btn btn-info ml-1 md:ml-5 xl:ml-32">
            View Profile
          </button>
        </Link>
      </div>

      <button
        className="btn btn-neutral text-zinc-100"
        onClick={() => dispatch(reset())}
      >
        Find a new pair
      </button>
    </div>
  )
}

export default AfterPair
