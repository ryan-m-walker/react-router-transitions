import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { TransitionGroup, TransitionContext, TransitionLink } from '../../RouterTransition'

import Overview from './Overview'
import Props from './Props'


const Context = () => (
  <TransitionContext time={600}>
    <h1>TransitionContext</h1>
    <TransitionLink to='/transition-context/'>Overview</TransitionLink>
    <TransitionLink to='/transition-context/props'>Props</TransitionLink>
    <Switch>
      <TransitionGroup transitionStyles={transitionStyles}>
      <Route exact path='/transition-context/' component={Overview}/>
      <Route exact path='/transition-context/props' component={Props}/>
      </TransitionGroup>
    </Switch>
  </TransitionContext>
)


const transitionStyles = {
  outBegin: `
    transform: translateY(0);
    opacity: 1;
  `,
  outEnd: `
    transform: translateY(40px);
    opacity: 0;

  `,
  inBegin: `
    transform: translateY(40px);
    opacity: 0;

  `,
  inEnd: `
    transform: translateY(0);
    opacity: 1;
  `
}


export default Context
