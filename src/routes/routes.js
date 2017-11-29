import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { transparentize } from 'polished'

import Header from '../components/Header'
import Page from '../components/Page'

import data from '../data/data'
import { TransitionGroup, TransitionContext, TransitionLink } from '../RouterTransition'
import { Wrapper, transitionStyles, wrapperStyles } from './styles'

const Routes = () => (
  <Wrapper>
    <TransitionContext timeOut={100} timeIn={400}>
      <Header data={data}/>
      <TransitionGroup
        transitionEase='ease-out'
        transitionStyles={transitionStyles}
        wrapperStyles={wrapperStyles}>
        <Switch>
          {
            data.pages.map(page => (
              <Route 
                exact={page.exactPath} 
                path={page.path}
                render={() => <Page data={page}/>} />
            ))
          }
        </Switch>
      </TransitionGroup>
    </TransitionContext>
  </Wrapper>
)



export default Routes


{/* <Route exact path='/' component={Home} />
<Route path='/transition-context' component={Context} />
<Route path='/transition-link' component={Link} />
<Route path='/transition-group' component={Group} />
<Route component={PageNotFound} /> */}