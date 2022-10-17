import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Front: NextPage = () => {
  return (
    <div className="row">
      <div className="col-lg-6 alltext text-pageGray font-bold">
        <h1 className="big-heading">Gainesville&apos;s Best Friend Finder.</h1>
        <h2>Meet Gators Just Like You!</h2>
        <Link href="/meet">
          <button
            type="button"
            className="btn btn-lg download-button btn-warning"
          >
            Click here to start &gt;{' '}
          </button>
        </Link>
      </div>
      <div className="item1 rounded">
        <img
          className="title-image"
          src="https://play-lh.googleusercontent.com/7axrc7mjvO4-XtQziN5qY3gF_VGxS6PZRDSt7m_T5j07fLHz2eoh4xyItmTJ5smPxbk=w240-h480-rw"
        ></img>
      </div>
    </div>
  )
}

export default Front
