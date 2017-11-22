import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getStyles from './getStyles'


/*

PROPS

transitionStyles:  func that returns object(will be passed props, including props.theme as argument), func that returns string(will be passed props, including props.theme  as argument), object or string
wrapperStyles:     func that returns object(will be passed props, including props.theme  as argument), func that returns string(will be passed props, including props.theme  as argument), object or string
transitionEase:    string
wrapperEase:       string
wrapperClassName:  className for wrapper

*/



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

const Transition = styled.div`${props => 
  props.transitionStyles
  ? getStyles(props, props.transitionStyles)
  : ''
}`

const Wrapper = styled.div`${props => 
  props.wrapperStyles
  ? getStyles(props, props.wrapperStyles)
  : ''
}`


export default TransitionGroup
