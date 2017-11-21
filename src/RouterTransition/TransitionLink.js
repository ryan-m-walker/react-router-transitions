import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TransitionLink extends Component {
  render() {
    return (
      <button to={this.props.to} onClick={() => this.context.goTo(this.props.to)}>
        { this.props.label }
      </button>
    )
  }
}


TransitionLink.contextTypes = {
  goTo: PropTypes.func
}


export default TransitionLink

