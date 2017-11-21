import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionLink extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    event.preventDefault()
    
    this.context.transition.goTo(this.props.to)
  }

  render() {
    const { busyStyles, ...props } = this.props
    const { transitionState } = this.context.transition
    return (
      <A 
        busyStyles={busyStyles}
        transitionState={transitionState}
        onClick={this.handleClick}
        {...props} />
    )
  }
}


const A = styled.a`
  ${props => {
    if (props.transitionState) {
      return props.busyStyles
    }
  }}
`


export default TransitionLink
