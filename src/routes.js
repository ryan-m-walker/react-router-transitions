import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

import { TransitionGroup, TransitionContext, TransitionLink } from './RouterTransition'


const Routes = () => (
  <Wrapper>
    <TransitionContext timeOut={375} timeIn={225}>
      <Header>
        <h1>My Website</h1>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/contact'>Contact</StyledLink>
      </Header>
      <TransitionGroup
        transitionEase='ease'
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

const transitionStyles = props => ({
  outBegin: `
    transform: translateY(0);
    opacity: 1;
  `,
  outEnd: `
    transform: translateY(2rem);
    opacity: 0;
  `,
  inBegin: `
    transform: translateY(2rem);
    opacity: 0;
  `,
  inEnd: `
    transform: translateY(0);
    opacity: 1;
  `
})



export default Routes
