import React from 'react'
import './styles.less'

type CardProps = {
  className?: string,
  children: React.ReactNode
}

const Card = (props: CardProps): JSX.Element => {
  const { children, className } = props

  return (
    <div className={`card-root ${className}`}>
      {children}
    </div>
  )
}

export default Card