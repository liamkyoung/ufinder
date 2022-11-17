import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import {
  setCurrMessenger,
  resetCurrMessenger,
} from '../redux/slices/currMessengerSlice'
import UserData from '../data/user.json'

type Props = {
  primary: boolean
}

const Header = ({ primary }: Props) => {
  const dispatch = useDispatch()
  const setUserProfile = () => {
    dispatch(setCurrMessenger(UserData))
  }

  const resetMessenger = () => {
    dispatch(resetCurrMessenger())
  }

  return (
    <div className="flex items-center space-x-10 m-5 font-cartoon text-gray-800">
      <div className="text-2xl font-bold">
        <Link href={primary ? '/' : '/alternate'}>
          <h1 className="cursor-pointer hover:text-pageOrange">UFinder</h1>
        </Link>
      </div>

      <div className="flex space-x-5 items-center flex-grow">
        <Link href={primary ? '/chat' : '/alternate/chat'}>
          <h1
            className="hover:font-bold cursor-pointer"
            onClick={() => resetMessenger()}
          >
            Chat
          </h1>
        </Link>

        <Link href={primary ? '/pair' : '/alternate/pair'}>
          <h1 className="hover:font-bold cursor-pointer">Pair</h1>
        </Link>

        <Link href={primary ? '/meet' : '/alternate/meet'}>
          <h1 className="hover:font-bold cursor-pointer">Your Friends</h1>
        </Link>
      </div>
      <div className="flex items-center mr-5" onClick={() => setUserProfile()}>
        <Link href={primary ? '/profile' : '/alternate/profile'}>
          <UserCircleIcon className="h-10 cursor-pointer" />
        </Link>
        <h1 className="ml-3 hover:font-bold cursor-pointer">Logout</h1>
      </div>
    </div>
  )
}

export default Header
