import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HeadMetaData from '../components/HeadMetaData'
import Link from 'next/link'

const Interests: NextPage = () => {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Interests" />
      <Header />
      <div className="grid place-items-center min-w-min">
        <div className="col-span-full md:col-span-1 p-5 md:p-10 md:col-start-1 row-start-1">
          <h2 className="font-bold interestTitle1">What are your interests?</h2>
          <h1 className="text-lg interestTitle2">Pick at least 3 to get started.</h1>
        </div>
      </div>

      <div className='fixed bottom-0 w-full'>
        <Link href="/pair">
          <button className='bottom-0 my-8 px-10 py-4 text-2xl float-right tracking-wide rounded-full focus:outline-none'>
            <span>Continue</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Interests
