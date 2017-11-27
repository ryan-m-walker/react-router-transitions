import _ from 'lodash'


export default (props, styles, ease) => {
  const { transitionState, timeIn, timeOut, time } = props

  const getDefaultStyles = () => {
    console.log('In default styles')
    if (typeof styles === 'string') {
      return styles
    } else if (_.isFunction(styles)) {
      const returnedStyles = styles(props)
      if (_.isString(returnedStyles)) {
        return returnedStyles
      } else if (_.isObject(returnedStyles) && _.has(returnedStyles, 'default')) {
        return returnedStyles.default
      }
    } else if (_.isObject(styles) && _.has(styles, 'default')) {
      return styles.default
    }
    return ''
  }

  const getObjectStyles = () => {
    console.log('In get object styles')
    const { outBegin, outEnd, inBegin, inEnd } = styles
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
        return ''  
    } 
  }

  const getFunctionStyles = () => {
    console.log('In get function styles')
    const { outBegin, outEnd, inBegin, inEnd } = styles(props)
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
        return ''
    }
  }

  const getTransitionStyles = () => {
    console.log('In get transition styles')
      const delayIn = timeIn ? timeIn : (time / 2)
      const delayOut = timeOut ? timeOut : (time / 2)

      switch(transitionState) {
        case 'out-begin':
          return 'transition: all ' + delayIn + 'ms ' + (ease ? ease : '') + ';'
        case 'out-end':
          return 'transition: all ' + delayIn + 'ms ' + (ease ? ease : '') + ';'
        case 'in-begin':
          return ''
        case 'in-end':
          return 'transition: all ' + delayOut + 'ms ' + (ease ? ease : '') + ';'
        default: 
          return ''
      }
    
  }

  return `
    ${ getDefaultStyles() }
    ${ _.isObject(styles) ? getObjectStyles() : '' }
    ${ _.isFunction(styles) ? getFunctionStyles() : '' }
    ${ getTransitionStyles()}
  `
}

