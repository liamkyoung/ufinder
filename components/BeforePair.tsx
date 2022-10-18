import React from 'react'
import { UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/slices/pairStateSlice'

type Props = {}

function BeforePair({}: Props) {
  const dispatch = useDispatch()
  return (
    <div className="centerFlexCol text-black font-poppins mt-12">
      <h1 className="md:text-4xl text-2xl">Pair with a New Friend</h1>
      <h2 className="lg:text-lg text-sm">
        Find another person also looking for a friend!
      </h2>
      {/* Pair Box */}

      <div className="border-4 border-pageBlue min-w-max p-5 flex justify-between mt-12 text-lg lg:text-2xl rounded-lg bg-pageBlue bg-opacity-30">
        <div className="centerFlexCol mr-5">
          <UserIcon className="scaleBigIcons" />
          <h1 className="">You</h1>
        </div>
        <div className="h-92 border-4 border-pageBlue rounded-lg"></div>
        <div className="centerFlexCol ml-5">
          <QuestionMarkCircleIcon className="scaleBigIcons animate-colorChange" />
          <h1 className="">New Friend</h1>
        </div>
      </div>

      <button
        className="btn btn-success btn-lg mt-5 text-zinc-100"
        onClick={() => dispatch(increment())}
      >
        Click to Find Pair!
      </button>
    </div>
  )
}

export default BeforePair
