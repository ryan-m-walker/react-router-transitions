import React from 'react'

import { Body, H3 } from '../shared/styles'
 

const Overview = () => (
  <div>
    <H3>Overview</H3>
    <Body>
      The *TransitionContext* compenent is the main wrapping component for react-router-transitions. It is used to communicate from your TransitionLinks to your TransitionGroups allowing you to place your navigation links where you would like with out having to pass state up and down a chain of components to update your routes. It can also used to keep your transitions in synce if you decide to have more than one transition group in a transition. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside the *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the same history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings.
    </Body>
  </div>
)


export default Overview
