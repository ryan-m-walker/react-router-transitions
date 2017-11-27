import React, { Component } from 'react'
import PropTypes from 'prop-types'


// TODO : allow for adding 'time' prop and only one of either 'timeIn' or 'timeOut' - calculate difference automatically
//   if - only time
//   if - time and timeIn only
//   if - time and timeOut only
//   if - timeOut only
//   if - timeIn only


/*

PROPS:

time:      number (milliseconds) - the amount of total time a transition will take. This number will be divided in half between the transition out and transition in
timeOut:   number (milliseconds) - used to specifiy transition out time
timeIn:    number (milliseconds) - used to specify transition time in
outBegin:  func - an optional lifecycle function that can be passed that will fire at the begining of transition out
outEnd:    func - an optional lifecycle function that can be passed that will fire at the end of transition out
inBegin:   func - an optional lifecycle function that can be passed that will fire at the beginning of transition in
inEnd:     func - an optional lifecycle function that can be passed that will fire at the end of transition in


*/



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

  goTo = (path, begin, between, end, e) => {
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
      if (begin) {
        begin(e)
      }  
      // Run life-cycle function if exists
      if (lifeCycleOutBegin) {
        lifeCycleOutBegin(this.props, this.state)
      }
      this.setState(() => ({ transitionState: 'out-begin' }))
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
      // this.setState(() => ({ transitionState: 'in-between' }))
      this.context.router.history.push(path)
      if (between) {
        between(e)
      }
      setTimeout(() => {
        inBegin()
      }, 10)
    }

    const inBegin = () => {
      if (lifeCycleInBegin) {  
        lifeCycleInBegin(this.props, this.state) 
      }
      this.setState(() => ({ transitionState: 'in-begin' }))
      // Run life-cycle function if exists
      setTimeout(() => {
        this.setState(() => ({ transitionState: 'in-end' }))
        inEnd()
      }, 10)
    }

    const inEnd = () => {
      setTimeout(() => {
        if (end) {
          end(e)
        }
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
