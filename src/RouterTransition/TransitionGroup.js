import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionGroup extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  render() {
    console.log(this.context)
    return (
      <Transition 
        time={this.context.transition.time} 
        transitionStyles={this.props.transitionStyles}
        transition={this.context.transition.transition}>
        { this.props.children }
      </Transition>
    )
  }
}


const Transition = styled.div`
${props => {
  switch(props.transition) {
    case 'out-begin':
      return props.transitionStyles.outBeginStyles
    case 'out-end':
      return props.transitionStyles.outEndStyles
    case 'in-begin':
      return props.transitionStyles.inBeginStyles
    case 'in-end':
      return props.transitionStyles.inEndStyles
    default: 
      return props.transitionStyles.outBeginStyles
  }
}}
transition: ${props => props.transition 
  ? 'all ' + props.time + 'ms'
  : 'none'
};
`


export default TransitionGroup
