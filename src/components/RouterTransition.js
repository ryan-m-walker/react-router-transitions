import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';



const TRANSITION = 500


export class RouterTransition extends Component {

  state = {
    transition: ''
  }

  getChildContext() {
    return {color: "purple"};
  }

  goTo = path => {
    const outBegin = () => {
      this.setState(() => ({ transition: 'out-begin' }))
      setTimeout(() => {
        outEnd()
      }, 1)
    }

    const outEnd = () => {
      this.setState(() => ({ transition: 'out-end' }))
      setTimeout(() => {
        this.props.history.push(path)
        inBegin()
      }, TRANSITION)
    }

    const inBegin = () => {
      this.setState(() => ({ transition: 'in-begin' }))
      setTimeout(() => {
        inEnd()
      }, 1)
    }

    const inEnd = () => {
      this.setState(() => ({ transition: 'in-end' }))
      setTimeout(() => {
        clearTransition()
      }, TRANSITION)
    }

    const clearTransition = () => {
      this.setState(() => ({ transition: '' }))
    }

    !this.state.transition && outBegin()
    
  }

  render() {
    console.log(this.context)
    return (
      <div>
        <Transition transition={this.state.transition}>
          { this.props.children }
        </Transition>
      </div>
    )
  }
}

RouterTransition.childContextTypes = {
  color: PropTypes.string
};

export class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};


const outBeginStyles = `
  opacity: 1;
  transform: translateY(0);
`

const outEndStyles = `
  opacity: 0;
  transform: translateY(50%);
`

const inBeginStyles = `
  opacity: 0;
  transform: translateY(50%);
`

const inEndStyles = `
  opacity: 1;
  transform: translateY(0);
`


const Transition = styled.div`
  ${({transition}) => {
    switch(transition) {
      case 'out-begin':
        return outBeginStyles
      case 'out-end':
        return outEndStyles
      case 'in-begin':
        return inBeginStyles
      case 'in-end':
        return inEndStyles
      default: 
        return outBeginStyles
    }
  }}
  transition: ${({transition}) => transition 
    ? 'all ' + TRANSITION + 'ms'
    : 'none'
  };
`




// TransitionProvider
// TransitionGroup
// TransitionLink


