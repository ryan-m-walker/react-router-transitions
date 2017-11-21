import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Header from './components/Header'

import { TransitionGroup, TransitionContext } from './RouterTransition'


const styles = props => ({
  outBegin: `
    opacity: 1;
    transform: translateY(0); 
  `,
  outEnd: `
    opacity: 0;
    transform: translateY(50%);
    background-color: ${props.theme.color};
  `,
  inBegin: `
    opacity: 0;
    transform: translateY(50%);
    background-color: ${props.theme.color};
  `,
  inEnd: `
    opacity: 1;
    transform: translateY(0);
  `
})


const config = {
  timeIn: 250,
  timeOut: 350,
  outBegin: () => console.log('outBegin'),
  outEnd: () => console.log('outEnd'),
  inBegin: () => console.log('inBegin'),
  inEnd: () => console.log('inEnd')
}


const Routes = () => (
  <TransitionContext config={config}>
    <Header />
    <TransitionGroup color='pink' transitionStyles={styles}>
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
