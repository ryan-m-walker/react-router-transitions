import React from 'react'

export default {
  siteTitle: 'Styled Router Transitions',
  pages: [
    {
      title: 'Introduction',
      path: '/',
      exactPath: true,
      text: 'Styled Router Transitions'
    },
    {
      title: '<TransitionContext>',
      path: '/transition-context',
      exactPath: false,
      subRoutes: [
        {
          title: 'Overview',
          path: '/transition-context',
          exactPath: true,
          text: <span>The <b>TransitionContext</b> compenent is the main wrapping component for react-router-transitions. It is used to communicate from your TransitionLinks to your TransitionGroups allowing you to place your navigation links where you would like with out having to pass state up and down a chain of components to update your routes. It can also used to keep your transitions in synce if you decide to have more than one transition group in a transition. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside the *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the same history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings.'</span>
        },
        {
          title: 'Props',
          path: '/transition-context/props',
          exactPath: false,
          text: 'Lorum Ipsum'
        }
      ]
    },
    {
      title: '<TransitionLink>',
      path: '/transition-link',
      exactPath: false,
      subRoutes: [
        {
          title: 'Overview',
          path: '/transition-link',
          exactPath: true,
          text: 'The *TransitionContext* compenent is the main wrapping component for react-router-transitions. It is used to communicate from your TransitionLinks to your TransitionGroups allowing you to place your navigation links where you would like with out having to pass state up and down a chain of components to update your routes. It can also used to keep your transitions in synce if you decide to have more than one transition group in a transition. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside the *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the same history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings.'
        },
        {
          title: 'Props',
          path: '/transition-link/props',
          exactPath: false,
          text: 'Lorum Ipsum'
        }
      ]
    },
    {
      title: '<TransitionGroup>',
      path: '/transition-group',
      exactPath: false,
      subRoutes: [
        {
          title: 'Overview',
          path: '/transition-group',
          exactPath: true,
          text: 'The *TransitionContext* compenent is the main wrapping component for react-router-transitions. It is used to communicate from your TransitionLinks to your TransitionGroups allowing you to place your navigation links where you would like with out having to pass state up and down a chain of components to update your routes. It can also used to keep your transitions in synce if you decide to have more than one transition group in a transition. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside the *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the same history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings.'
        },
        {
          title: 'Props',
          path: '/transition-group/props',
          exactPath: false,
          text: 'Lorum Ipsum'
        }
      ]
    }
  ]
}