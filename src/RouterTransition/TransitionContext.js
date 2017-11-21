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
    const { time, timeIn, timeOut } = this.props.config || this.props  

    return {
      transition: {
        goTo: this.goTo,
        transitionState: this.state.transitionState,
        time: time,
        timeIn: timeIn,
        timeOut: timeOut
      }
    }
  }

  goTo = path => {
    const { time, timeIn, timeOut } = this.props.config || this.props  
    const delay = time ? time : 500
    const delayIn = timeIn ? timeIn : delay
    const delayOut = timeOut ? timeOut : delay

    const { 
      inBegin: lifeCycleInBegin,
      inEnd: lifeCycleInEnd,
      outBegin: lifeCycleOutBegin,
      outEnd: lifeCycleOutEnd
    } = this.props.config || this.props

    const outBegin = () => {  

      // Run life-cycle function if exists
      if (lifeCycleOutBegin) {
        lifeCycleOutBegin()
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
        if (lifeCycleOutEnd) {
          lifeCycleOutEnd()
        }
        this.context.router.history.push(path)
        inBegin()
      }, delayIn)
    }

    const inBegin = () => {
      // Run life-cycle function if exists
      if (lifeCycleInBegin) {  
        lifeCycleInBegin() 
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
        if (lifeCycleInEnd) {
          lifeCycleInEnd()
        }
        clearTransition()
      }, delayOut)
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
