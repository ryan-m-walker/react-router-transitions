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
    return (
      <a 
        to={this.props.to} 
        onClick={this.handleClick}>
        { this.props.label }
      </a>
    )
  }
}


export default TransitionLink
