import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { transparentize } from 'polished'

import Home from './components/Home'
import Context from './components/Context/index'
import Link from './components/Link'
import Group from './components/Group'
import PageNotFound from './components/PageNotFound'

import { TransitionGroup, TransitionContext, TransitionLink } from './RouterTransition'


const Routes = () => (
  <Wrapper>
    <TransitionContext timeOut={100} timeIn={400}>

      <Header>
        <h1>My Website</h1>
        <TransitionLink
          exact
          to='/'
          defaultStyles={linkStyles}
          activeStyles={activeLink}>
          Intro
        </TransitionLink>
        <TransitionLink
          to='/transition-context'
          defaultStyles={linkStyles}
          activeStyles={activeLink}>
          TransitionContext
        </TransitionLink>
        <TransitionLink
          to='/transition-link'
          defaultStyles={linkStyles}
          activeStyles={activeLink}>
          TransitionLink
        </TransitionLink><TransitionLink
          to='/transition-group'
          defaultStyles={linkStyles}
          activeStyles={activeLink}>
          transitionGroup
        </TransitionLink>
      </Header>

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


const linkStyles = ({theme}) => `
  color: white;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 250ms, border-color 150ms;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${ transparentize(1, theme.secondaryColor)}
`

const activeLink = ({theme}) => `
  color: ${theme.secondaryColor};
  border-bottom: 3px solid ${ theme.secondaryColor }
`

const Header = styled.header`
  background: teal;
  padding: 2rem 5%;
`

const Wrapper = styled.section`
  width: 50%;
  margin: 15vh auto;
  background: white;
`

const wrapperStyles =  `
  padding: 2rem 5%;
  overflow: hidden;
`



const transitionStyles = props => ({
  default: `
    transform-origin: 0 0;
  `,
  outBegin: `
    transform: translateX(0);
    opacity: 1;
  `,
  outEnd: `
    transform: translateX(-10%);
    opacity: 0;

  `,
  inBegin: `
    transform: translateX(50%);
    opacity: 0;

  `,
  inEnd: `
    transform: translateX(0);
    opacity: 1;
  `
})



export default Routes
