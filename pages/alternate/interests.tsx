import React, { useState } from 'react'
import type { NextPage } from 'next'
import InterestList from '../../components/InterestList'
import HeadMetaData from '../../components/HeadMetaData'
import Header from '../../components/Header'
import Link from 'next/link'

const Interests: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Alt Interests" />
      <Header primary={false} />

      <div className="grid place-items-center min-w-min">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1 text-gray-800 font-cartoon">
          <h2 className="font-bold interestTitle1 ">
            What are your interests?
          </h2>
          <h1 className="text-lg interestTitle2">
            Pick at least 3 to get started.
          </h1>
        </div>
      </div>

      <InterestList />
    </div>
  )
}

export default Interests
