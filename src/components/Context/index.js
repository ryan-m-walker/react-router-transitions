import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'


import { TransitionGroup, TransitionContext, TransitionLink } from '../../RouterTransition'
import { TransitionH2, delayIn } from '../shared/styles'

import Overview from './Overview'
import Props from './Props'


const Context = () => (
  <TransitionContext time={600}>
    <TransitionH2>&#60;TransitionContext&#62;</TransitionH2>
      <TransitionNav>
      <TransitionLink
        activeStyles={activeLink} 
        defaultStyles={linkStyles}
        exact 
        to='/transition-context'>
        Overview
      </TransitionLink>
      <TransitionLink 
        activeStyles={activeLink} 
        defaultStyles={linkStyles} 
        to='/transition-context/props'>
        Props
      </TransitionLink>
    </TransitionNav>
    <Switch>
      <TransitionGroup 
        wrapperStyles={wrapperStyles} 
        transitionStyles={transitionStyles}>
      <Route exact path='/transition-context/' component={Overview}/>
      <Route exact path='/transition-context/props' component={Props}/>
      </TransitionGroup>
    </Switch>
  </TransitionContext>
)




export default Context

const linkStyles = `
padding: 0.5rem;
cursor: pointer;
transition: background-color 250ms linear;
background: #fff;
`

const activeLink = `
background: #eee;
`

const wrapperStyles = `
margin-top: 1.5rem;
padding: 1rem 0;
overflow: hidden;
width: 100%;
`

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

const TransitionNav = styled.nav`
animation: ${delayIn} 400ms ease-out;
`