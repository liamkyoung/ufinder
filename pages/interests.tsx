import React, { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import InterestButton from '../components/InterestButton'
import Link from 'next/link'
import Data from '../data/interests.json'

const Interests: NextPage = () => {
  const [interests, setInterests] = useState(new Set<string>())

  const updateItems = (item: string) => {
    if (!interests.has(item))
      setInterests((prev) => new Set([...Array.from(prev), item]))
    else
      setInterests(
        (prev) => new Set([...Array.from(prev)].filter((x) => x !== item))
      )
    console.log(interests)
  }
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Interests" />
      <Header primary={true} />
      <div className="grid place-items-center min-w-min text-gray-800 font-cartoon">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1">
          <h2 className="font-bold interestTitle1 text-black">
            What are your interests?
          </h2>
          <h1 className="text-lg interestTitle2 text-gray-800">
            Pick at least 3 to get started.
          </h1>
        </div>
      </div>
      <div className="mx-16 pb-24">
        <div className="grid text-black text-2xl grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Data.interests.map((item, i) => (
            <button
              key={i}
              className={`btn m-5 font-bold font-poppins ${
                !interests.has(item) ? 'btn-accent' : 'btn-warning'
              }`}
              onClick={() => updateItems(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        {interests.size >= 3 ? (
          <InterestButton active={true} link="/prepair" />
        ) : (
          <InterestButton active={false} link="" />
        )}
      </div>
    </div>
  )
}

export default Interests
