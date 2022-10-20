import {
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  FaceSmileIcon,
  NoSymbolIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid'
import React from 'react'
import Link from 'next/link'

type Props = {
  name: string
  age: number
  similarInterests: string[]
  otherInterests: string[]
}

function ProfileInfo({ name, age, similarInterests, otherInterests }: Props) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-md p-10">
      <div className="flex justify-between text-white">
        <div className="flex-1">
          <Link href="/">
            <ChevronLeftIcon className="profileButton" />
          </Link>
        </div>

        <div className="flex">
          <UserPlusIcon className="profileButton" />
          <NoSymbolIcon className="profileButton" />
          <ChatBubbleLeftRightIcon className="profileButton" />
        </div>
      </div>
      <div className="flex justify-center items-start w-full pt-5">
        <FaceSmileIcon className="h-32 cursor-pointer text-zinc-200" />
      </div>
      <div className="shadow-md border-2 bg-blue-400 h-16 rounded-md text-black text-xl font-cartoon flex items-center pl-5 mt-3 mb-5 justify-between">
        <div className="flex-1 text-2xl">{name}</div>

        <div className="w-max bg-yellow-200 border-2 border-yellow-400 mr-5 p-2 rounded-md">
          {age} years old
        </div>
      </div>
      <div className="border-2 border-white rounded-md flex justify-between">
        <div className="border-2 border-zinc-200 border-opacity-50 m-2 p-2 rounded-md">
          <div className="text-white font-cartoon text-2xl mb-1">
            Similar Interests:
          </div>{' '}
          {similarInterests?.map((interest, i) => (
            <h1 key={i} className="font-cartoon text-white text-center">
              {interest}
            </h1>
          ))}
        </div>
        <div className="border-2 border-zinc-200 border-opacity-50 m-2 p-2 rounded-md">
          <div className="text-white font-cartoon text-2xl mb-1">
            Other Interests:
          </div>{' '}
          {otherInterests?.map((interest, i) => (
            <h1 key={i} className="font-cartoon text-white text-center">
              {interest}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
