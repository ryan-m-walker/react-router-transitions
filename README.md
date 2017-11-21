
# React-Router-Transitions:



## TransitionContext

- Automatically grabs the history object off of React router
- All related transitionLinks and transition groups must be wrapped in the same transitionContext

- Life Cycle Functions

The *TransitionContext* compenent is the main wrapping component for react-router-transitions. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside a *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the history object provided by that component to manipulate the url and make sure the UI updates accordingly. The transition context is also where you set 



## TransitionLink

- Behaves very similarily to react-router Link component
- 

## TransitionGroup

- Transition styles: needs to be either an object or can be a function that returns an object. If it is a function it will be passed the props of the component as the only arguement

