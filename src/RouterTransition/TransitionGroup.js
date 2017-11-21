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
    const { transitionState, timeIn, timeOut } = this.context.transition
    const { children, transitionStyles,  wrapperStyles, wrapperClassName, ...props  } = this.props

    return (
      <Wrapper
        className={wrapperClassName}
        transitionState={transitionState}
        wrapperStyles={wrapperStyles}>
        <Transition 
          timeIn={timeIn}
          timeOut={timeOut} 
          transitionStyles={transitionStyles}
          transitionState={transitionState}
          {...props}>
          { children }
        </Transition>
      </Wrapper>
    )
  }
}


export default TransitionGroup
