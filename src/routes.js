import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Header from './components/Header'

import { TransitionGroup, TransitionContext } from './RouterTransition'



const styles = {
  outBegin: `
    opacity: 1;
    transform: translateY(0);
  `,
  outEnd: `
    opacity: 0;
    transform: translateY(50%);
  `,
  inBegin: `
    opacity: 0;
    transform: translateY(50%);
  `,
  inEnd: `
    opacity: 1;
    transform: translateY(0);
  `
}


const Routes = () => (
  <TransitionContext 
    time={5000}
    outBegin={() => console.log('outBegin')}
    outEnd={() => console.log('outEnd')}
    inBegin={() => console.log('inBegin')}
    inEnd={() => console.log('inEnd')}
    afterEnd={() => console.log('afterEnd')}
  >
    <Header />
    <TransitionGroup transitionStyles={styles}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </TransitionGroup>
  </TransitionContext>
)



// const outBeginStyles = `
//   opacity: 1;
//   transform: translateY(0);
// `

// const outEndStyles = `
//   opacity: 0;
//   transform: translateY(50%);
// `

// const inBeginStyles = `
//   opacity: 0;
//   transform: translateY(50%);
// `

// const inEndStyles = `
//   opacity: 1;
//   transform: translateY(0);
// `


// const Transition = styled.div`
//   ${({transition}) => {
//     switch(transition) {
//       case 'out-begin':
//         return outBeginStyles
//       case 'out-end':
//         return outEndStyles
//       case 'in-begin':
//         return inBeginStyles
//       case 'in-end':
//         return inEndStyles
//       default: 
//         return outBeginStyles
//     }
//   }}
//   transition: ${({transition}) => transition 
//     ? 'all ' + TRANSITION + 'ms'
//     : 'none'
//   };
// `





/*
const Transition = styled.div`
  opacity: ${({transition}) => {
    switch (transition) {
      case 'out-begin':
        return 1
      case 'out-end':
        return 0
      case 'in-begin':
        return 0
      case 'in-end':
        return 1
      default:
        return 1
    }
  }};
  transform: translateY(${({transition}) => {
    switch (transition) {
      case 'out-begin':
        return 0
      case 'out-end':
        return '50%'
      case 'in-begin':
        return '50%'
      case 'in-end':
        return 0
      default:
        return 0
    }
  }});

`

*/


export default Routes
