import React, { Component } from 'react'
import './styles.less'

type CardProps = {
  className?: string,
  children: React.ReactNode
}

class Card extends Component<CardProps> {

  render() {
    return (
      <div className={`card-root ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Card