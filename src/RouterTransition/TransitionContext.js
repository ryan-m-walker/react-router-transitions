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
        time: this.props.config && this.props.config.time ? this.props.config.time : this.props.time,
        timeIn: this.props.config && this.props.config.timeIn ? this.props.config.time : this.props.time,
        timeOut: this.props.config && this.props.config.Out ? this.props.config.Out : this.props.Out
      }
    }
  }

  goTo = path => {
    const time = this.props.config.time || this.props.time
    const timeOut = this.props.config.timeOut || this.props.timeOut
    const timeIn = this.props.config.timeIn || this.props.timeIn
    const delayIn = timeIn ? timeIn : (time / 2)
    const delayOut = timeOut ? timeOut : (time / 2)

    const { 
      inBegin: lifeCycleInBegin,
      inEnd: lifeCycleInEnd,
      outBegin: lifeCycleOutBegin,
      outEnd: lifeCycleOutEnd
    } = this.props.config || this.props






    //////////////////// 

    // OUT - BEGIN

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


    ////////////////////

    // OUT - END

    const outEnd = () => {
      setTimeout(() => {
        // Run life-cycle function if exists
        if (lifeCycleOutEnd) {
          lifeCycleOutEnd(this.props, this.state)
        }
        inBetween()
      }, (delayOut - 10))
    }


    ////

    // BETWEEN

    const inBetween = () => {
      this.setState(() => ({ transitionState: 'in-between' }))
      this.context.router.history.push(path)
      setTimeout(() => {
        inBegin()
      }, 10)
    }


    ////////////////////

    // IN - BEGIN

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


    ////////////////////

    // IN - END

    const inEnd = () => {
      setTimeout(() => {
        // Run life-cycle function if exists
        if (lifeCycleInEnd) {
          lifeCycleInEnd(this.props, this.state)
        }
        clearTransition()
      }, (delayIn - 10))
    }



    ////////////////////

    // CLEAR

    const clearTransition = () => {
      this.setState(() => ({ transitionState: '' }))
    }


    // INITIATE

    !this.state.transitionState && outBegin()
  }

  render() {
    console.log(this.state.transitionState)
    return <div>{ this.props.children }</div>
  }
}


export default TransitionContext
