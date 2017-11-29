import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router'

import { TransitionLink, TransitionContext, TransitionGroup } from '../RouterTransition'
import SubPage from './SubPage'
import { TransitionH2, delayIn } from './shared/styles'

const Page = ({data}) => (
  <TransitionContext time={600}>
    <TransitionH2>{ data.title }</TransitionH2>
      { 
        data.subRoutes &&
        <TransitionNav>
        {
          data.subRoutes.map(page => (
            <TransitionLink 
              activeStyles={activeLink}
              defaultStyles={linkStyles}
              exact={page.exactPath}
              to={page.path}>
              { page.title }
            </TransitionLink>
          ))
        }
        </TransitionNav>
      }  
      {
        data.subRoutes ?
        <Switch>
        <TransitionGroup 
          wrapperStyles={wrapperStyles} 
          transitionStyles={transitionStyles}>
          {
            data.subRoutes.map(page => (
              <Route 
                path={page.path}
                exact={page.exactPath}
                render={() => <SubPage data={page}/>}
              />
            ))
          }
        </TransitionGroup>
        </Switch>
        : 
        <p>{ data.text }</p>
      }
    
  </TransitionContext>
)

{/* <Route exact path='/transition-context/' component={Overview}/>
<Route exact path='/transition-context/props' component={Props}/> */}

const linkStyles = ({theme}) => `
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 250ms linear;
  background: #ececec;
`

const activeLink = `
background: #ccc;
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

export default Page