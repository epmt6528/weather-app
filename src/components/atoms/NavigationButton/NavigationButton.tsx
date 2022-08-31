import React, { Component } from 'react'
import './styles.less'

type NavigationButtonProps = {
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  active: boolean
}

class NavigationButton extends Component<NavigationButtonProps> {

  render() {
    return (
      <button className={this.props.active ? 'navigationButton-root navigationButton-active' : 'navigationButton-root'} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default NavigationButton