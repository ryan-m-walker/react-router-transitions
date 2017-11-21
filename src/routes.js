import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

import { TransitionGroup, TransitionContext, TransitionLink } from './RouterTransition'
import { config } from './transitionHelpers'


const Routes = () => (
  <Wrapper>
    <TransitionContext time={1000}>
      <Header>
        <h1>My Website</h1>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
      </Header>
      <TransitionGroup
        transitionEase='ease-out'
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

const wrapperStyles = `
  padding: 2rem 5%;
  overflow: hidden;
`

const transitionStyles = {
  outBegin: `
    opacity: 1;
    transform: translateX(0);
  `,
  outEnd: `
    opacity: 0;
    transform: translateY(10rem);
  `,
  inBegin: `
    opacity: 0;
    transform: translateY(10rem);
  `,
  inEnd: `
    opacity: 1;
    transform: translateX(0);
  `
}



export default Routes
