import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'


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
    if (this.context.transition.activeLocation !== this.props.to) {
      event.preventDefault()
      this.context.transition.goTo(
        this.props.to, 
        this.props.onBegin, 
        this.props.onBetween,
        this.props.onEnd,
        event
      )
    }
  }

  render() {
    const { busyStyles, children, ...props } = this.props
    const { transitionState } = this.context.transition
    const active = this.props.exact 
      ? this.context.transition.activeLocation === this.props.to
      : this.context.transition.activeLocation.startsWith(this.props.to) 
    return (
      <Link
        active={active}
        busyStyles={busyStyles}
        transitionState={transitionState}
        onClick={this.handleClick}
        {...props}>
        { children }
      </Link>
    )
  }
}

const Link = styled.a`
  ${ props => {
    if (_.isFunction(props.defaultStatus)) {
      return props.defaultStyles(props)
    }
    return props.defaultStyles 
  }}
  ${ props => {
    if (props.active) {
      if (_.isFunction(props.activeStyles)) {
        return props.activeStyles(props)
      }
      return props.activeStyles 
    }
  }}
`


export default TransitionLink
