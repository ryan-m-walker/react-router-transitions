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

  static defaultProps = {
    time: 0
  }

  getChildContext() {
    return {
      transition: {
        goTo: this.goTo,
        transitionState: this.state.transitionState,
        time: this.props.time,
        timeIn: this.props.timeIn,
        timeOut: this.props.timeOut
      }
    }
  }

  goTo = path => {
    const { time, timeIn, timeOut } = this.props
    const delayIn = timeIn ? timeIn : (time / 2)
    const delayOut = timeOut ? timeOut : (time / 2)

    const { 
      inBegin: lifeCycleInBegin,
      inEnd: lifeCycleInEnd,
      outBegin: lifeCycleOutBegin,
      outEnd: lifeCycleOutEnd
    } = this.props


    const outBegin = () => {  
      this.setState(() => ({ transitionState: 'out-begin' }))
      // Run life-cycle function if exists
      if (lifeCycleOutBegin) {
        lifeCycleOutBegin(this.props, this.state)
      }
      setTimeout(() => {
        this.setState(() => ({ transitionState: 'out-end' }))
        outEnd()
      }, 10)
    }

    const outEnd = () => {
      setTimeout(() => {
        // Run life-cycle function if exists
        if (lifeCycleOutEnd) {
          lifeCycleOutEnd(this.props, this.state)
        }
        inBetween()
      }, (delayOut - 20))
    }

    const inBetween = () => {
      this.setState(() => ({ transitionState: 'in-between' }))
      this.context.router.history.push(path)
      setTimeout(() => {
        inBegin()
      }, 10)
    }

    const inBegin = () => {
      this.setState(() => ({ transitionState: 'in-begin' }))
      // Run life-cycle function if exists
      if (lifeCycleInBegin) {  
        lifeCycleInBegin(this.props, this.state) 
      }
      setTimeout(() => {
        this.setState(() => ({ transitionState: 'in-end' }))
        inEnd()
      }, 10)
    }

    const inEnd = () => {
      setTimeout(() => {
        // Run life-cycle function if exists
        if (lifeCycleInEnd) {
          lifeCycleInEnd(this.props, this.state)
        }
        clearTransition()
      }, (delayIn - 10))
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
