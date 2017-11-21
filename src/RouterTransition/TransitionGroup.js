import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionGroup extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  render() {
    const { time, transitionState } = this.context.transition
    const { children, transitionStyles } = this.props

    return (
      <Transition 
        time={time} 
        transitionStyles={this.props.transitionStyles}
        transitionState={transitionState}>
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
      case 'out-end':
        return props.transitionStyles.outEnd
      case 'in-begin':
        return props.transitionStyles.inBegin
      case 'in-end':
        return props.transitionStyles.inEnd
      default: 
        return props.transitionStyles.outBegin
    }
  }}
  transition: ${props => props.transitionState
    ? 'all ' + props.time + 'ms'
    : 'none'
  };
`


export default TransitionGroup
