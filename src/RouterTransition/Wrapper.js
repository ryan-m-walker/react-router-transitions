import styled from 'styled-components'
import _ from 'lodash'


export default styled.div`
  ${props => {
    if (typeof props.wrapperStyles === 'string') {
      return props.wrapperStyles
    } else if (_.isFunction(props.wrapperStyles)) {
      const returnedStyles = props.wrapperStyles(props)
      if (_.isString(returnedStyles)) {
        return returnedStyles
      } else if (_.isObject(returnedStyles) && _.has(returnedStyles, 'default')) {
        return returnedStyles.default
      }
    } else if (_.isObject(props.wrapperStyles) && _.has(props.wrapperStyles, 'default')) {
      return props.wrapperStyles.default
    }
  }}

  ${props => {
    if (_.isObject(props.wrapperStyles)) {
      const { wrapperStyles, transitionState } = props
      const { outBegin, outEnd, inBegin, inEnd } = wrapperStyles
      switch(transitionState) {
        case 'out-begin':
          return outBegin ? outBegin : '' 
        case 'out-end': 
          return outEnd ? outEnd : '' 
        case 'in-begin':
          return inBegin ? inBegin : ''
        case 'in-end':
          return inEnd ? inEnd : ''
        default:
          return  
      }
    }
  }}

  ${props => {
    if (_.isFunction(props.wrapperStyles)) {
      const { wrapperStyles, transitionState } = props
      const { outBegin, outEnd, inBegin, inEnd } = wrapperStyles
      switch(transitionState) {
        case 'out-begin':
          return outBegin ? outBegin(props) : '' 
        case 'out-end':
          return outEnd ? outEnd(props) : '' 
        case 'in-begin':
          return inBegin ? inBegin(props) : ''
        case 'in-end':
          return inEnd ? inEnd(props) : '' 
        default:
          return 
      }
    }
  }}

  ${props => {
    if (props.wrapperStyles) {
      const timeIn = props.timeIn ? props.timeIn : (props.time / 2)
      const timeOut = props.timeOut ? props.timeOut : (props.time / 2)
      const { wrapperEase } = props

      switch(props.transitionState) {
        case 'out-begin':
          return 'transition: all ' + timeIn + 'ms ' + (wrapperEase ? wrapperEase : '') + ';'
        case 'out-end':
          return 'transition: all ' + timeIn + 'ms ' + (wrapperEase ? wrapperEase : '') + ';'
        case 'in-begin':
          return ''
        case 'in-end':
          return 'transition: all ' + timeOut + 'ms ' + (wrapperEase ? wrapperEase : '') + ';'
        default: 
          return ''
      }
    }
  }} 
`
