import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/pairStateSlice'

type Props = {}

function DuringPair({}: Props) {
  const dispatch = useDispatch()
  let timer: NodeJS.Timeout

  const handleClick = () => {
    dispatch(decrement())
    clearTimeout(timer)
  }

  useEffect(() => {
    timer = setTimeout(
      () => dispatch(increment()),
      Math.floor(Math.random() * 4000)
    )
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="centerFlexCol h-screen text-black font-poppins overflow-hidden -mt-24">
      <h1 className="text-2xl font-bold">Pairing in Progress</h1>
      <h1 className="text-xl pt-3 mb-12">Please Wait...</h1>
      <Loader />
      <button className="btn btn-error mt-24" onClick={() => handleClick()}>
        Cancel
      </button>
    </div>
  )
}

export default DuringPair
