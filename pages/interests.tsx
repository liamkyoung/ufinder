import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import InterestButton from '../components/InterestButton'
import Link from 'next/link'

const Interests: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Interests" />
      <Header />
      <div className="grid place-items-center min-w-min text-gray-800 font-cartoon">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1">
          <h2 className="font-bold interestTitle1">What are your interests?</h2>
          <h1 className="text-lg interestTitle2">
            Pick at least 3 to get started.
          </h1>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <InterestButton link="/pair" />
      </div>
    </div>
  )
}

export default Interests
