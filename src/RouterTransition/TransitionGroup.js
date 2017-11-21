import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Transition from './Transition'
import Wrapper from './Wrapper'


class TransitionGroup extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  render() {
    const { time, transitionState, timeIn, timeOut } = this.context.transition
    const { children, transitionStyles,  wrapperStyles, transitionEase, wrapperEase, wrapperClassName, ...props  } = this.props

    return (
      <Wrapper
        time={time}
        timeIn={timeIn}
        timeOut={timeOut} 
        className={wrapperClassName}
        transitionState={transitionState}
        wrapperStyles={wrapperStyles}
        wrapperEase={wrapperEase}>
        <Transition 
          time={time}
          timeIn={timeIn}
          timeOut={timeOut} 
          transitionStyles={transitionStyles}
          transitionState={transitionState}
          transitionEase={transitionEase}
          {...props}>
          { children }
        </Transition>
      </Wrapper>
    )
  }
}


export default TransitionGroup
