import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  link: string
}

const Front: NextPage = ({ link }: Props) => {
  return (
    <div className="row">
      <div className="col-lg-6 alltext text-gray-800">
        <h1 className="big-heading font-cartoon">
          Gainesville&apos;s Best Friend Finder.
        </h1>
        <h2 className="font-cartoon text-pageGray italic -mt-3">
          Meet Gators Just Like You!
        </h2>
        <Link href={link}>
          <button
            type="button"
            className="btn btn-lg download-button btn-warning font-bold"
          >
            Click here to start &gt;{' '}
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
      {/* <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L20,58.7C40,53,80,43,120,80C160,117,200,203,240,240C280,277,320,267,360,256C400,245,440,235,480,202.7C520,171,560,117,600,122.7C640,128,680,192,720,208C760,224,800,192,840,160C880,128,920,96,960,74.7C1000,53,1040,43,1080,69.3C1120,96,1160,160,1200,197.3C1240,235,1280,245,1320,234.7C1360,224,1400,192,1420,176L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  )
}

export default Front
