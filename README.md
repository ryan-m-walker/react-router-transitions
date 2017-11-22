
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

The TransitionGroup component is a component that wraps around the content that you want to animate during a transition. An easy way to achieve this is to wrap all your Routes or your Switch in the TransitionGroup component but can also be wrapped around other content you would like to animate. The component is made up of two divs: the Transition and the Wrapper. Both can be animated seperately and will animate in synce with each other. 

### Props:

### *transitionStyles* & *wrapperStyles*

The transitionStyles and wrapperStyles props are were you define the styles to be applied to the transition group during the transition. There are several ways to set this up. These props can be either a string, a function that returns a string, an object or a function that returns an object:

#### String:

Using a string in the styles props is the same as applying static styles using a styled component. This may be useful if you just want to style the wrapper to be used as a positioning container but will not change or have any effect when transitions are fired.

*Example:*

    <TransitionGroup wrapperStyles={wrapperStyles} />
    ...
    const wrapperStyles = 'background: black;'

You can use template literals to define multiline CSS similar to how you would with styled components:

*Example:*

    <TransitionGroup wrapperStyles={wrapperStyles} />
    ...
    const wrapperStyles = `
      background: black;
      padding: 2rem;
      border: 1px solid teal;
    `

#### Function that returns a string

A better use of string styles is to use a function that returns a string. The function used will automatically be passed the components props as an argument including the global styled-components' theme if you have set one up. This will still only be static styles though and will not animate turing a transition.

*Example*

    <TransitionGroup wrapperStyles={wrapperStyles} />
    ...
    const wrapperStyles = props => `
      background: props.theme.backgroundColor
      border: props.theme.primaryColor
    `

#### Object

In order to apply animation styles to a transition you have to use an object. This object must have certain keys in order to work correctly. Each key should return a string with the styles that you want to happen during that part of the transition to be applied. You can also add a default key for styles that will always apply to the element unless overwritten by a transition styles.

*Example*

    <TransitionGroup transitionStyles={transitionStyles} />
    ...
    const transitionStyles = {
      default: `
        background: teal;
        padding: 5%;
      `,
      outBegin: `
        opacity: 1;
        transform: translateY(0);
      `,
      outEnd: `
        opacity: 0;
        transform: translateY(30px);
      `,
      inBegin: `
        opacity: 0;
        transform: translateY(30px);
      `,
      inEnd: `
        opacity: 1;
        transform: translateY(0);
      `,
    }