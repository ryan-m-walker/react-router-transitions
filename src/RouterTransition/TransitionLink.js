import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*

PROPS

to          string - url the link will take you to
onBegin     func - lifecycle function that will call at the beginning of the transition. Good for handling onClick events at the right time
onBetween   func - lifecycle function that will call in the middle of the transition. Good for handling onClick events at the right time
onEnd       func - lifecycle function that will call at the end of the transition. Good for handling onClick events at the right time

*/


class TransitionLink extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  handleClick = event => {
    event.preventDefault()
    this.context.transition.goTo(
      this.props.to, 
      this.props.onBegin, 
      this.props.onBetween,
      this.props.onEnd,
      event
    )
  }

  render() {
    const { busyStyles, ...props } = this.props
    const { transitionState } = this.context.transition
    return (
      <a
        busyStyles={busyStyles}
        transitionState={transitionState}
        onClick={this.handleClick}
        {...props} />
    )
  }
}


export default TransitionLink
