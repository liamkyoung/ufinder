import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import MessengerActive from './MessengerActive'
import MessengerInactive from './MessengerInactive'

type Props = {}

function Messenger({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )

  return (
    <>
      {currMessenger?.id !== -1 ? <MessengerActive /> : <MessengerInactive />}
    </>
  )
}

export default Messenger
