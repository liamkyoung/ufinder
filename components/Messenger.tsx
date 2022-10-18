import React from 'react'
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  UserPlusIcon,
  UserMinusIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import Message from './Message'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import { resetCurrMessenger } from '../redux/slices/currMessengerSlice'
import MessengerActive from './MessengerActive'
import MessengerInactive from './MessengerInactive'

type Props = {}

function Messenger({}: Props) {
  const currMessenger = useSelector(
    (state: RootState) => state.currentMessenger.value
  )
  //  ${currMessenger.id === -1 ? 'hidden' : ''}
  return (
    <>
      {currMessenger?.id !== -1 ? <MessengerActive /> : <MessengerInactive />}
    </>
  )
}

export default Messenger
