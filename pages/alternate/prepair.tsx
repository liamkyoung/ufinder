import React from 'react'
import type { NextPage } from 'next'
import HeadMetaData from '../../components/HeadMetaData'
import Header from '../../components/Header'
import Link from 'next/link'

type Props = {}

function prepair({}: Props) {
  return (
    <div className="page">
      <HeadMetaData title="UFinder | Pair" />
      <Header primary={false} />
      <div className="flex justify-center items-center flex-1 flex-col text-black">
        <h1 className="mb-24 mt-16 text-4xl font-cartoon">
          What Would You Like To Do?
        </h1>
        <div className="text-center space-y-6">
          <Link href="/alternate/pair">
            <button className="btn btn-success btn-lg">
              <b>Find A New Friend</b>
            </button>
          </Link>
          <h1 className="text-2xl"> - OR -</h1>
          <Link href="/alternate/meet">
            <button className="btn btn-warning btn-lg">
              View Friends List
            </button>
          </Link>
          <div>
            <Link href="/alternate/interests">
              <button className="btn btn-error mt-10">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default prepair
