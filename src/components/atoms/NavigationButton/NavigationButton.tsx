import React from 'react'
import './styles.less'

interface NavigationButtonProps {
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  active: boolean
}

const NavigationButton = (props: NavigationButtonProps) => {
  const {onClick, children, active} = props
  const className = active ? 'navigationButton-root navigationButton-active' : 'navigationButton-root'

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default NavigationButton