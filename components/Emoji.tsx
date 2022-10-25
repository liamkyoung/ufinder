import React from 'react'

type Props = {
  emoji: string
}

function Emoji({ emoji }: Props) {
  return <div>{emoji}</div>
}

export default Emoji
