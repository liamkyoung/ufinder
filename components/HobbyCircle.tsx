import React, { useState } from 'react'
import ProfileCircle from './ProfileCircle'

type Props = {
  hobby: string
  friends: Friend[]
}

type Friend = {
  id: number
  name: string
  online: boolean
  anonymous: boolean
  favorite: boolean
  lastLogin: number
  similarInterests: string[]
  messages: Message[]
}

type Message = {
  id: number
  text: string
  timestamp: number
}

type Position = {
  x: number
  y: number
}

function HobbyCircle({ hobby, friends }: Props) {
  const division = 360 / friends?.length
  const radius = 90

  const positions: Position[] = friends?.map((_, i) => {
    let y = Math.floor(Math.sin(division * i * (Math.PI / 180)) * radius)
    let x = Math.floor(Math.cos(division * i * (Math.PI / 180)) * radius)

    return { x: x, y: y }
  })

  return (
    <div className="">
      <div className="h-48 w-48 relative rounded-full">
        <div
          className="absolute h-64 w-64 bg-pageBlue bg-opacity-70 rounded-full"
          style={{ top: -radius - 20, left: -radius - 10 }}
        ></div>
        <h1 className="text-black font-bold text-xl font-cartoon bg-slate-100 rounded-lg w-min px-3 py-1 absolute -left-3 top-1 text-center">
          {hobby}
        </h1>
        {positions?.map((item, i) => (
          <ProfileCircle key={i} pos={item} friend={friends[i]} />
        ))}
      </div>
    </div>
  )
}

export default HobbyCircle
