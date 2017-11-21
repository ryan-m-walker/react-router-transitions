import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createBrowserHistory as createHistory } from 'history'

class TransitionContext extends Component {

  state = {
    transition: ''
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  static childContextTypes = {
    goTo: PropTypes.func,
    transition: PropTypes.string,
    time: PropTypes.number
  }

  getChildContext() {
    return {
      transition: {
        goTo: this.goTo,
        transition: this.state.transition,
        time: this.props.time
      }
    }
  }

  goTo = path => {
    console.log('test')
    
    const { time } = this.props

    const outBegin = () => {
      this.setState(() => ({ transition: 'out-begin' }))
      setTimeout(() => {
        outEnd()
      }, 1)
    }

    const outEnd = () => {
      this.setState(() => ({ transition: 'out-end' }))
      setTimeout(() => {
        this.context.router.history.push(path)
        inBegin()
      }, time)
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
      }, time)
    }

    const clearTransition = () => {
      this.setState(() => ({ transition: '' }))
    }

    !this.state.transition && outBegin()
    
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}


export default TransitionContext
