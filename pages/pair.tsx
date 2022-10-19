import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import HeadMetaData from '../components/HeadMetaData'
import Header from '../components/Header'
import BeforePair from '../components/BeforePair'
import DuringPair from '../components/DuringPair'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import AfterPair from '../components/AfterPair'

const Pair: NextPage = () => {
  const pairState = useSelector((state: RootState) => state.pairState.value)
  const [currScreen, setScreen] = useState(<BeforePair />)

  useEffect(() => {
    if (pairState === 0) {
      setScreen(<BeforePair />)
    } else if (pairState === 1) {
      setScreen(<DuringPair />)
    } else if (pairState === 2) {
      setScreen(<AfterPair />)
    }
  }, [pairState])

  return (
    <div className="page">
      <HeadMetaData title="UFinder | Pair" />
      <Header />
      {currScreen}
    </div>
  )
}

export default Pair
