import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Header from './components/Header'

import { TransitionGroup, TransitionContext } from './RouterTransition'
import { transitionStyles, wrapperStyles, config } from './transitionHelpers'


const Routes = () => (
  <TransitionContext config={config}>
    <Header />
    <TransitionGroup
      wrapperStyles={wrapperStyles}
      transitionStyles={transitionStyles}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </TransitionGroup>
  </TransitionContext>
)


export default Routes
