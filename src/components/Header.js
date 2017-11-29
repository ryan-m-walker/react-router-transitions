import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

import { TransitionLink } from '../RouterTransition'


const Header = ({data}) => (
  <Wrapper>
    <H1>{ data.siteTitle }</H1>
    <NavBar>
    {
      data.pages.map(page => (
        <TransitionLink 
          to={page.path}
          exact={page.exactPath}
          defaultStyles={linkStyles}
          activeStyles={activeLink}>
          { page.title }
        </TransitionLink>
      ))
    }
    </NavBar>
  </Wrapper>
)


const linkStyles = ({theme}) => `
  color: white;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 250ms, border-color 150ms;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${ transparentize(1, theme.color.primary)}
`

const activeLink = ({theme}) => `
  color: ${theme.color.primary};
  border-bottom: 3px solid ${ theme.color.primary }
`

const H1 = styled.h1`
  ${ ({theme}) => `
    font-family: ${theme.font.heading};
    font-size: ${theme.size.l};
    margin-bottom: ${theme.size.l};
  `}
  text-transform: uppercase;
`

const Wrapper = styled.div`
  background: #333;
  height: 5rem;
  text-align: center;
  padding: 3rem;
`

const NavBar = styled.header`
  
`

export default Header




// <TransitionLink
// exact
// to='/'
// defaultStyles={linkStyles}
// activeStyles={activeLink}>
// Intro
// </TransitionLink>
// <TransitionLink
// to='/transition-context'
// defaultStyles={linkStyles}
// activeStyles={activeLink}>
// TransitionContext
// </TransitionLink>
// <TransitionLink
// to='/transition-link'
// defaultStyles={linkStyles}
// activeStyles={activeLink}>
// TransitionLink
// </TransitionLink>
// <TransitionLink
// to='/transition-group'
// defaultStyles={linkStyles}
// activeStyles={activeLink}>
// transitionGroup
// </TransitionLink>