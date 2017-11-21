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
        case 'in-between':
          return transitionStyles.inBegin || ''
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
          return transitionStyles(props).outBegin || '' 
        case 'out-end':
          return transitionStyles(props).outEnd || ''
        case 'in-between':
          return transitionStyles(props).inBegin || ''
        case 'in-begin':
          return transitionStyles(props).inBegin || ''
        case 'in-end':
          return transitionStyles(props).inEnd || ''  
      }
    }
  }}

  ${props => {
    if (props.transitionStyles) {
      const timeIn = props.timeIn ? props.timeIn : (props.time / 2)
      const timeOut = props.timeOut ? props.timeOut : (props.time / 2)
      const { transitionEase } = props

      switch(props.transitionState) {
        case 'out-begin':
          return 'transition: all ' + timeIn + 'ms ' + (transitionEase ? transitionEase : '') + ';'
        case 'out-end':
          return 'transition: all ' + timeIn + 'ms ' + (transitionEase ? transitionEase : '') + ';'
        case 'in-between':
          return
        case 'in-begin':
          return 'transition: all ' + (timeOut - 200) + 'ms ' + (transitionEase ? transitionEase : '') + ';'
        case 'in-end':
          return 'transition: all ' + (timeOut - 200) + 'ms ' + (transitionEase ? transitionEase : '') + ';'
        default: 
          return ''
      }
    }
  }} 
`








