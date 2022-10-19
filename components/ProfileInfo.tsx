import {
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  FaceSmileIcon,
  NoSymbolIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
  name: string
  age: number
  similarInterests: string[]
  otherInterests: string[]
}

function ProfileInfo({}: Props) {
  return (
    <div className="bg-pageGray h-96 w-96 shadow-lg rounded-md p-3">
      <div className="flex justify-between">
        <div className="flex-1">
          <ChevronLeftIcon className="h-8" />
        </div>

        <div className="flex">
          <UserPlusIcon className="h-8" />
          <NoSymbolIcon className="h-8" />
          <ChatBubbleLeftRightIcon className="h-8" />
        </div>
      </div>
      <div className="flex justify-center items-start w-full pt-5">
        <FaceSmileIcon className="h-32" />
      </div>
    </div>
  )
}

export default ProfileInfo
