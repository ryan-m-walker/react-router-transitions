import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TransitionLink extends Component {

  static contextTypes = {
    transition: PropTypes.object
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    event.preventDefault()
    
    this.context.transition.goTo(this.props.to)
  }

  render() {
    const {...props} = this.props
    return (
      <a {...props} onClick={this.handleClick} />
    )
  }
}


export default TransitionLink
