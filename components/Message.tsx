import React from 'react'

type Props = {
  user: boolean
  text: string
  timestamp: number
}

function Message({ user, text, timestamp }: Props) {
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
        <h2
          className={
            user
              ? 'text-right text-xs italic text-slate-900 mt-1'
              : 'text-left  text-xs italic text-slate-900 mt-1'
          }
        >
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </h2>
      </div>
    </div>
  )
}

export default Message
