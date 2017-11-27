import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { transparentize } from 'polished'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

import { TransitionGroup, TransitionContext, TransitionLink } from './RouterTransition'


const Routes = () => (
  <Wrapper>
    <TransitionContext time={200}>
      <Header>
        <h1>My Website</h1>
        <StyledLink to='/'>
          Home
        </StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
      </Header>
      <TransitionGroup
        transitionEase='linear'
        transitionStyles={transitionStyles}
        wrapperStyles={wrapperStyles}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </TransitionGroup>
    </TransitionContext>
  </Wrapper>
)


const StyledLink = styled(TransitionLink)`
  color: white;
  margin-right: 1.5rem;
  cursor: pointer;
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

const wrapperStyles = {
  default: `
    padding: 2rem 5%;
    overflow: hidden;
  `,
  outBegin: `
    background-color: ${transparentize(1, 'teal')};
  `,
  outEnd: `
    background-color: ${transparentize(0.9, 'teal')};
  `,
  inBegin: `
    background-color: ${transparentize(0.9, 'teal')};
  `,
  inEnd: `
    background-color: ${transparentize(1, 'teal')};
  `
}


const transitionStyles = {
  default: `
    transform-origin: 50% 100%;
  `,
  outBegin: `
    transform: scaleY(1);
    opacity: 1;
  `,
  outEnd: `
    transform: scaleY(0);
    opacity: 0;

  `,
  inBegin: `
    transform: scaleY(0);
    opacity: 0;

  `,
  inEnd: `
    transform: scaleY(1);
    opacity: 1;
  `
}



export default Routes
