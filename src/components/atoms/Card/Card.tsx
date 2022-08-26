import React from 'react'
import './styles.less'

interface CardProps  {
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  const { children } = props

  return (
    <div className='card-root'>
      {children}
    </div>
  )
}

export default Card