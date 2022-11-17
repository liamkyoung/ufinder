import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  interestLink: string
  friendsLink: string
}

const Front = ({ interestLink, friendsLink }: Props) => {
  return (
    <div className="row">
      <div className="col-lg-6 alltext text-gray-800">
        <h1 className="big-heading font-cartoon">
          Gainesville&apos;s Best Friend Finder.
        </h1>
        <h2 className="font-cartoon text-pageGray italic -mt-3">
          Meet Gators Just Like You!
        </h2>
        <Link href={interestLink}>
          <button
            type="button"
            className="btn btn-lg download-button btn-warning font-bold font-poppins"
          >
            Select Your Interests &gt;{' '}
          </button>
        </Link>
        <Link href={friendsLink}>
          <button
            type="button"
            className="btn btn-lg download-button btn-info font-bold font-poppins"
          >
            View Friends List &gt;{' '}
          </button>
        </Link>
      </div>
      <div className="item1 rounded">
        <Image
          className="title-image"
          layout="responsive"
          height="30%"
          width="30%"
          alt="gator-img"
          src="/gator.png"
        />
      </div>
    </div>
  )
}

export default Front
