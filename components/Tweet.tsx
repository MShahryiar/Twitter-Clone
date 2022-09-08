import React from 'react'
import { Tweet } from '../typings'

interface Props{
    tweet:Tweet[]
}

function Tweet({tweet}:Props) {
  return (
    <div>{tweet.text}</div>
  )
}

export default Tweet