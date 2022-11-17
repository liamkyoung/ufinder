import React, { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { CiFaceSmile } from 'react-icons/ci'

import Data from '../data/friends.json'
import MeetProfile from './MeetProfile'

const Meeting2: NextPage = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="container" id="features">
      <div className="flex flex-col items-center ml-44">
        <h2 className="font-cartoon text-center pb-5">Meet Each Other!</h2>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="conversationBox input input-bordered w-full max-w-xs"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="scroll-w carousel carousel-center max-w-2xl p-10 space-x-10 bg-gradient-to-r from-cyan-200 to-slate-200 rounded-box mt-10">
          {Data.friendData.map((friend, i) => {
            if (
              search === '' ||
              friend.name.toLowerCase().includes(search?.toLowerCase())
            ) {
              return (
                <div
                  key={i}
                  id={`slide${i}`}
                  className="carousel-item relative w-full border-2 border-zinc-100 p-3 rounded-lg bg-zinc-100"
                >
                  <MeetProfile friend={friend} />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${
                        i !== 0
                          ? (i - 1) % Data.friendData.length
                          : Data.friendData.length - 1
                      }`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${(i + 1) % Data.friendData.length} `}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Meeting2
