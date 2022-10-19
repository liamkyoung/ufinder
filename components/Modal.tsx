import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCurrMessenger } from '../redux/slices/currMessengerSlice'

type Props = {
  title: string
  subtitle: string
  handler: Function
  id: string
  button1: string[]
  button2: string[]
}

function Modal({ title, subtitle, handler, id, button1, button2 }: Props) {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="modal" id={id}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{subtitle}</p>
          <div className="modal-action">
            <a href="#" onClick={() => dispatch(handler())}>
              <button className={button1[0]}>{button1[1]}</button>
            </a>
            <a href="#">
              <button className={button2[0]}>{button2[1]}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
