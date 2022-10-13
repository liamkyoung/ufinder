import React from 'react'

type Props = {
  user: boolean
  text: string
}

function Message({ user, text }: Props) {
  return (
    <div
      className={user ? 'w-full flex justify-end' : 'w-full flex justify-start'}
    >
      <div
        className={
          user
            ? 'no-animation max-w-lg mb-3 bg-pageBlue p-3 rounded-lg hover:bg-pageLightBlue shadow-md'
            : 'no-animation max-w-lg mb-3  bg-pageOrange p-3 rounded-lg shadow-md'
        }
      >
        <h1 className="text-md font-poppins text-black">{text}</h1>
      </div>
    </div>
  )
}

export default Message
