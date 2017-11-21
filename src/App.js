import React from 'react'
import TransitionGroup from './RouterTransition/TransitionGroup'
import TransitionContext from './RouterTransition/TransitionContext'
import TransitionLink from './RouterTransition/TransitionLink'



export default () => (
  <TransitionContext time={500}>
    <TransitionLink label='test' to='/'/>
    <TransitionGroup>
      
    </TransitionGroup>
  </TransitionContext>
)

