
# React-Router-Transitions:



## TransitionContext

The *TransitionContext* compenent is the main wrapping component for react-router-transitions. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside a *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings. This can be done through either the *time* prop, in which case the time in milliseconds provided will be divided evenly between transition out of the old route and transition in of the new route, or else the different times can be specified using the *timeOut* and *timeIn* props.

*Example*:

    <BrowserRouter>  // from react-router
      <TransitionContext time={1000}>
        <TransitionLink to='/'>
          Home
        </TransitionLink>
        <TransitionLink to='/about'>
          About
        </TransitionLink>
        <TransitionGroup>
          <Route exact path='/' component={Home} />  // from react-router
          <Route path='/about' component={About} />  // from react-router
        </TransitionGroup>
    </BrowserRouter> 

### TransitionContext lifecyle functions

There are four lifecycle function props for the TransitionContext component that can be used to add more functionality during a transition: *outBegin*, *outEnd*, *inBegin* and *inEnd*. *outBegin* will be fired right at the begining of the entire transition, immediately before the leaving route begins its exit. The *outEnd* function will be fired right after that route has completed its exit. The *inBegin* functin will be fired right before the entering route begins is transition in. The *inEnd* function will be fired at the very end of the transition, after the entering route has finished its transition into place.

*Example*: 

    <TransitionContext
      outBegin={() => console.log('Old component is begining its exit')}
      outEnd={() => console.log('Old component has left')}
      inBegin={() => console.log('New component is beginning its entrance')}
      inBegin={() => console.log('New component is beginning its entrance')}>


      ...
    </TransitionContext>

## TransitionLink

- Behaves very similarily to react-router Link component
- 

## TransitionGroup

The TransitionGroup component is a component that wraps around the content that you want to animate during a transition. An easy way to achieve this is to wrap all your Routes or your Switch in the TransitionGroup component but can also be wrapped around other content you would like to animate. The component is made up of two divs: the Transition and the Wrapper. Both can be animated seperately and will animate in synce with each other. 

### Props:

### *transitionEase* & *wrapperEase*

The *transitionEase* and *wrapperEase* props take a string that allow you define the easing function that you would regularily pass to a CSS animation rule. The *transitionEase* will be applied to the main transition group and the *wrapperEase* will be passed to the wrapper div.

*Example*:

    <TransitionGroup 
      transitionEase='linear' 
      wrapperEase='ease-out'/>

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

A better use of string styles is to use a function that returns a string. The function used will automatically be passed the component props as an argument including the global styled-components' theme if one has been set up. This will still only provide static styles though and will not animate turing a transition.

*Example*:

    <TransitionGroup wrapperStyles={wrapperStyles} />
    ...
    const wrapperStyles = props => `
      background: props.theme.backgroundColor
      border: props.theme.primaryColor
    `

#### Object

In order to apply animation styles to a transition you have to use an object. This object must have certain keys in order to work correctly. Each key should contain a string with the styles that you want to occur during that part of the transition to be applied. You can also add a default key for styles that will always apply to the element unless overwritten by a transition styles, although this key is optional.

*Example*:

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

#### Function that returns an object

Like with the string, you can also create a function that returns an object which will be passed the props from the component.

*Example*:

    <TransitionGroup transitionStyles={transitionStyles} />
    ...
    const transitionStyles = props => ({
      outBegin: `
        opacity: 1;
        color: props.theme.primaryColor;
      `,
      outEnd: `
        opacity: 0;
        color: props.theme.darkColor;
      `,
      inBegin: `
        opacity: 0;
        color: props.theme.darkColor;
      `,
      inEnd: `
        opacity: 1;
        color: props.theme.primaryColor;
      `,
    })