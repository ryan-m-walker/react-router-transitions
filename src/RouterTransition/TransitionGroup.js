import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getStyles from './getStyles'


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
        className={'transition-wrapper ' + wrapperClassName}
        transitionState={transitionState}
        wrapperStyles={wrapperStyles}
        wrapperEase={wrapperEase}>
        <Transition 
          time={time}
          timeIn={timeIn}
          timeOut={timeOut}
          className={'transition-wrapper ' + this.props.className}
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

const Transition = styled.div`${props => getStyles(props, props.transitionStyles)}`
const Wrapper = styled.div`${props => getStyles(props, props.wrapperStyles)}`

export default TransitionGroup
