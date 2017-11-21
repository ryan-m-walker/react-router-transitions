import React, { Component } from 'react'
import TransitionLink from '../RouterTransition/TransitionLink'

const Header = ({goTo}) =>  (
  <div>
    <h1>My Website</h1>
    <TransitionLink
      label='Home'
      to='/'/>
    <TransitionLink
      label='About'
      to='/about'/>
    <TransitionLink
      label='Contact'
      to='/contact'/>
  </div>
)
  


// const TransitionLink = ({label, to, goTo}) => (
//   <button onClick={() => goTo(to)}>
//     { label }
//   </button>
// )


export default Header
