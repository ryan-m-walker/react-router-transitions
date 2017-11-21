import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


class TransitionGroup extends Component {
  render() {
    console.log(this.context)
    return (
      <Transition 
        time={this.context.time} 
        transitionStyles={this.props.transitionStyles}
        transition={this.context.transition}>
        { this.props.children }
      </Transition>
    )
  }
}

TransitionGroup.contextTypes = {
  transition: PropTypes.string,
  time: PropTypes.number
}




// const outBeginStyles = `
// opacity: 1;
// transform: translateY(0);
// `

// const outEndStyles = `
// opacity: 0;
// transform: translateY(50%);
// `

// const inBeginStyles = `
// opacity: 0;
// transform: translateY(50%);
// `

// const inEndStyles = `
// opacity: 1;
// transform: translateY(0);
// `


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
