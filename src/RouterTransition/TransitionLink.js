import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionLink extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  handleClick = event => {
    event.preventDefault()
    this.context.transition.goTo(
      this.props.to, 
      this.props.start, 
      this.props.between,
      this.props.end,
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
