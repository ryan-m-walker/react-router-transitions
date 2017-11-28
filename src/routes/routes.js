import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { transparentize } from 'polished'

import Header from '../components/Header'
import Home from '../components/Home'
import Context from '../components/Context/index'
import Link from '../components/Link'
import Group from '../components/Group'
import PageNotFound from '../components/PageNotFound'

import { TransitionGroup, TransitionContext, TransitionLink } from '../RouterTransition'
import { Wrapper, transitionStyles, wrapperStyles } from './styles'

const Routes = () => (
  <Wrapper>
    <TransitionContext timeOut={100} timeIn={400}>
      <Header />
      <TransitionGroup
        transitionEase='ease-out'
        transitionStyles={transitionStyles}
        wrapperStyles={wrapperStyles}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/transition-context' component={Context} />
          <Route path='/transition-link' component={Link} />
          <Route path='/transition-group' component={Group} />
          <Route component={PageNotFound} />
        </Switch>
      </TransitionGroup>
    </TransitionContext>
  </Wrapper>
)



export default Routes
