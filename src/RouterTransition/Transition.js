import styled from 'styled-components'
import _ from 'lodash'


export default styled.div`
  ${props => {
    const { transitionStyles } = props

    if (typeof transitionStyles === 'string') {
      return transitionStyles
    } else if (_.isFunction(transitionStyles)) {
      const returnedStyles = transitionStyles(props)
      if (_.isString(returnedStyles)) {
        return returnedStyles
      } else if (_.isObject(returnedStyles) && _.has(returnedStyles, 'default')) {
        return returnedStyles.default
      }
    } else if (_.isObject(transitionStyles) && _.has(transitionStyles, 'default')) {
      return transitionStyles.default
    }
  }}

  ${props => {
    const { transitionStyles, transitionState } = props
    if (_.isObject(transitionStyles)) {
      switch(transitionState) {
        case 'out-begin':
          return transitionStyles.outBegin || '' 
        case 'out-end':
          return transitionStyles.outEnd || '' 
        case 'in-begin':
          return transitionStyles.inBegin || ''
        case 'in-end':
          return transitionStyles.inEnd || ''  
      }
    }
  }}

  ${props => {
    const { transitionStyles, transitionState } = props
    if (_.isFunction(transitionStyles)) {
      switch(transitionState) {
        case 'out-begin':
          return transitionStyles.outBegin(props) || '' 
        case 'out-end':
          return transitionStyles.outEnd(props) || '' 
        case 'in-begin':
          return transitionStyles.inBegin(props) || ''
        case 'in-end':
          return transitionStyles.inEnd(props) || ''  
      }
    }
  }}

  ${props => {
    if (props.transitionStyles) {
      const time = props.time ? props.time : 500
      const timeIn = props.timeIn ? props.timeIn : time
      const timeOut = props.timeOut ? props.timeOut : time

      switch(props.transitionState) {
        case 'out-begin':
          return 'transition: all ' + timeIn + 'ms;'
        case 'out-end':
          return 'transition: all ' + timeIn + 'ms;'
        case 'in-begin':
          return 'transition: all ' + timeOut + 'ms;'
        case 'in-end':
          return 'transition: all ' + timeOut + 'ms;'
        default: 
          return ''
      }
    }
  }} 
`









