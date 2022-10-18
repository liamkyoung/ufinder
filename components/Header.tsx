import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header: NextPage = () => {
  return (
    <div className="flex items-center space-x-10 m-5 font-poppins text-pageBlue">
      <div className="text-2xl font-bold">
        <Link href="/">
          <h1 className="cursor-pointer hover:text-pageOrange">UFinder</h1>
        </Link>
      </div>

      <div className="flex space-x-5 items-center flex-grow">
        <Link href="/chat">
          {/* <div className="indicator">
            <span className="indicator-item badge badge-success animate-pulse scale-50 translate-x-3"></span>
            <h1 className="hover:font-bold cursor-pointer">Chat</h1>
          </div> */}
          <h1 className="hover:font-bold cursor-pointer">Chat</h1>
        </Link>

        <Link href="/meet">
          <h1 className="hover:font-bold cursor-pointer">Meet</h1>
        </Link>

        <Link href="/pair">
          <h1 className="hover:font-bold cursor-pointer">Pair</h1>
        </Link>
      </div>
      <div className="flex items-center mr-5">
        <Link href="/profile">
          <UserCircleIcon className="h-10 cursor-pointer" />
        </Link>

        <h1 className="ml-3 hover:font-bold cursor-pointer">Logout</h1>
      </div>
    </div>
  )
}

export default Header
