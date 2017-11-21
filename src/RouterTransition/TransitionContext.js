import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TransitionContext extends Component {

  state = {
    transitionState: ''
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  static childContextTypes = {
    transition: PropTypes.object
  }

  getChildContext() {
    return {
      transition: {
        goTo: this.goTo,
        transitionState: this.state.transitionState,
        time: this.props.time
      }
    }
  }

  goTo = path => {
    const { time } = this.props

    const outBegin = () => {
      // Run life-cycle function if exists
      if (this.props.outBegin) {
        this.props.outBegin()
      }
      this.setState(() => ({ transitionState: 'out-begin' }))
      setTimeout(() => {
        outEnd()
      }, 1)
    }

    const outEnd = () => {
      this.setState(() => ({ transitionState: 'out-end' }))
      setTimeout(() => {
        // Run life-cycle function if exists
        if (this.props.outEnd) {
          this.props.outEnd()
        }
        this.context.router.history.push(path)
        inBegin()
      }, time)
    }

    const inBegin = () => {
      // Run life-cycle function if exists
      if (this.props.inBegin) {  
        this.props.inBegin() 
      }
      this.setState(() => ({ transitionState: 'in-begin' }))
      setTimeout(() => {
        inEnd()
      }, 1)
    }


    const inEnd = () => {
      this.setState(() => ({ transitionState: 'in-end' }))
      setTimeout(() => {
        // Run life-cycle function if exists
        if (this.props.inEnd) {
          this.props.inEnd()
        }
        clearTransition()
      }, time)
    }

    const clearTransition = () => {
      this.setState(() => ({ transitionState: '' }))
    }

    !this.state.transitionState && outBegin()
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}


export default TransitionContext
