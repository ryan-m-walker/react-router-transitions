import React, { Component } from 'react'
import PropTypes from 'prop-types'


class HistoryProvider extends Component {

  getChildContext() {
    return {
      history: this.props.history
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

HistoryProvider.childContextTypes = {
  history: PropTypes.object
};


export default HistoryProvider