import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionGroup extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  render() {
    const { time, transitionState, timeIn, timeOut } = this.context.transition
    const { children, transitionStyles, ...props  } = this.props

    return (
      <Transition 
        timeIn={timeIn}
        timeOut={timeOut} 
        transitionStyles={transitionStyles}
        transitionState={transitionState}
        {...props}>
        { children }
      </Transition>
    )
  }
}

const Transition = styled.div`
  ${props => {
    switch(props.transitionState) {
      case 'out-begin':
        return props.transitionStyles.outBegin 
        ? props.transitionStyles.outBegin
        : props => props.transitionStyles(props).outBegin
      case 'out-end':
        return props.transitionStyles.outEnd
        ? props.transitionStyles.outEnd
        : props => props.transitionStyles(props).outEnd
      case 'in-begin':
        return props.transitionStyles.inBegin
        ? props.transitionStyles.inBegin
        : props => props.transitionStyles(props).inBegin
      case 'in-end':
        return props.transitionStyles.inEnd
        ? props.transitionStyles.inEnd
        : props => props.transitionStyles(props).inEnd
      default: 
        return props.transitionStyles.outBegin
        ? props.transitionStyles.outBegin
        : props => props.transitionStyles(props).outBegin
    }
  }};
  transition: ${props => {
    const time = props.time ? props.time : 500
    const timeIn = props.timeIn ? props.timeIn : time
    const timeOut = props.timeOut ? props.timeOut : time

    console.log(timeIn)
    
    switch(props.transitionState) {
      case 'out-begin':
        return 'all ' + timeIn + 'ms'
      case 'out-end':
        return 'all ' + timeIn + 'ms'
      case 'in-begin':
        return 'all ' + timeOut + 'ms'
      case 'in-end':
        return 'all ' + timeOut + 'ms'
      default: 
        return 'none'
    }
  }};
`


export default TransitionGroup
