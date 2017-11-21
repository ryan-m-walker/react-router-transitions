
export const config = {
  // outBegin: (props, state) => logger('outBegin', props, state),
  // outEnd: (props, state) => logger('outEnd', props, state),
  // inBegin: (props, state) => logger('inBegin', props, state),
  // inEnd: (props, state) => logger('inEnd', props, state),
}

const logger = (when, props, state) => {
  console.groupCollapsed(when)
  console.log(props)
  console.log(state)
  console.groupEnd()
}