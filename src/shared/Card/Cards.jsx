import React, { children } from 'react'
import "./Card.css"

const Cards = ({children}) => {
  return (
    <div className='card-container'>{children}</div>
  )
}

export default Cards