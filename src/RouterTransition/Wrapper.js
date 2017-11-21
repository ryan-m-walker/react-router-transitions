import styled from 'styled-components'
import _ from 'lodash'


export default styled.div`
  ${props => {
    const { wrapperStyles } = props

    if (typeof wrapperStyles === 'string') {
      return wrapperStyles
    } else if (_.isFunction(wrapperStyles)) {
      const returnedStyles = wrapperStyles(props)
      if (_.isString(returnedStyles)) {
        return returnedStyles
      } else if (_.isObject(returnedStyles) && _.has(returnedStyles, 'default')) {
        return returnedStyles.default
      }
    } else if (_.isObject(wrapperStyles) && _.has(wrapperStyles, 'default')) {
      return wrapperStyles.default
    }
  }}
  ${props => {
    const { wrapperStyles, transitionState } = props
    if (_.isObject(wrapperStyles)) {
      switch(transitionState) {
        case 'out-begin':
          return wrapperStyles.outBegin || '' 
        case 'out-end':
          return wrapperStyles.outEnd || '' 
        case 'in-begin':
          return wrapperStyles.inBegin || ''
        case 'in-end':
          return wrapperStyles.inEnd || ''  
      }
    }
  }}
  ${props => {
    const { wrapperStyles, transitionState } = props
    if (_.isFunction(wrapperStyles)) {
      switch(transitionState) {
        case 'out-begin':
          return wrapperStyles.outBegin(props) || '' 
        case 'out-end':
          return wrapperStyles.outEnd(props) || '' 
        case 'in-begin':
          return wrapperStyles.inBegin(props) || ''
        case 'in-end':
          return wrapperStyles.inEnd(props) || ''  
      }
    }
  }}
  ${props => {
    if (props.wrapperStyles) {
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
