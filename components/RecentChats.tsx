import React, { useState } from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Search from './Search'

type Message = {
  id: number
  text: string
  timestamp: number
}

type Friends = {
  id: number
  name: string
  online: boolean
  lastLogin: number
  messages: Message[]
}

type Props = {
  headers: string[]
  friends: Friends[]
}

function RecentChats({ headers, friends }: Props) {
  const tableHeaders = headers?.map((h, i) => <th key={i}>{h}</th>)
  const friendNames = friends?.map((f, i) => {
    const offlineHours = new Date(f.lastLogin).getHours()
    return (
      <li
        key={i}
        className={
          f.online ? 'border-l-4 border-b-0 border-pageGreen' : 'disabled'
        }
      >
        <div className="flex justify-between">
          <a>{f.name}</a>
          {f.online ? (
            <a className="badge badge-md bg-success text-black">Online</a>
          ) : (
            <a className="text-sm italic">
              Last Online:{' '}
              {offlineHours > 1 ? `${offlineHours} hours ago` : ' <1 hour ago'}
            </a>
          )}
        </div>
      </li>
    )
  })

  return (
    <div className="max-h-80">
      <Search />
      <ul className="menu bg-base-100 rounded-box mt-5">{friendNames}</ul>
    </div>
  )
}

export default RecentChats
