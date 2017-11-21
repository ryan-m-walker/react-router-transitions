import React from 'react'
import { TransitionLink } from '../RouterTransition'


const Header = () =>  (
  <div>
    <h1>My Website</h1>
    <TransitionLink to='/'>Home</TransitionLink>
    <TransitionLink to='/about'>About</TransitionLink>
    <TransitionLink to='/contact'>Contact</TransitionLink>
  </div>
)


export default Header
