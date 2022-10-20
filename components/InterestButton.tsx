import Link from 'next/link'
import React from 'react'

type Props = {
  link: string
  active: boolean
}

function InterestButton({ link, active }: Props) {
  return (
    <>
      <Link href={link}>
        <button
          className={`btn ${
            active ? 'btn-warning' : 'btn-disabled'
          } bottom-0 my-8 mx-24 text-2xl float-right tracking-wide focus:outline-none text-gray-800 font-cartoon`}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </Link>
    </>
  )
}

export default InterestButton
