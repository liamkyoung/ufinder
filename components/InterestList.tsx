import React, { useState } from 'react'
import Data from '../data/interests.json'
import { BookOpenIcon } from '@heroicons/react/24/solid'

type Props = {}

function InterestList({}: Props) {
  const leftItems: string[] = Data.interests.filter(
    (item: string, i: number) => i % 2 === 0
  )
  const rightItems: string[] = Data.interests.filter(
    (item: string, i: number) => i % 2 === 1
  )
  const [interests, setInterests] = useState([''])

  return (
    <div className="flex font-cartoon text-xl justify-center align-center min-h-max pb-10">
      <div className="text-right pr-20">
        {' '}
        <div>
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            {leftItems.map((item: string, i: number) => (
              <li
                key={i}
                className={interests.includes(item) ? 'active' : ''}
                onClick={() => setInterests([...interests, item])}
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-l-4 border-gray-800 min-h-max my-16"></div>
      <div className="pl-20">
        {' '}
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
          {rightItems.map((item, i) => (
            <li key={i} className="">
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InterestList
