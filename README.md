# React-Router-Transitions:

- [TransitionContext](#transitioncontex)
- [TransitionLink](#transitionlink)
- [TransitionGroup](#transitiongroup)

## Components:

## TransitionContext

The *TransitionContext* compenent is the main wrapping component for react-router-transitions. It is used to communicate from your TransitionLinks to your TransitionGroups allowing you to place your navigation links where you would like with out having to pass state up and down a chain of components to update your routes. It can also used to keep your transitions in synce if you decide to have more than one transition group in a transition. In order for your TransitionLinks and TransitionGroups to be linked they must both be placed inside the *TransitionContext* component. A *TransitionContext* component must also be a descendant of a react-router *BrowserRouter* or *Router* component. This is necessariy because it uses the same history object provided by that component to manipulate the url and make sure the UI updates in accordance with your routes. The transition context is also where you set your overall transition timings.

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
      </TransitionContext>
    </BrowserRouter> 

#### Props

#### *time*, *timeOut* & *timeIn*

The timing for your transitions are defined in the *TransitionContext* compenent using either the 'time' prop or the 'timeOut' and 'timeIn' props. All three components take a number which is the time for the transition in milliseconds. If the 'time' prop is used the number defined will specify the total lenght of the transition with the time evenly distributed between the transition out and transition in. To specify specific transition times between transitioning in and out use the 'timeOut' and 'timeIn' props together to specify different times.

*Example*:

    // Both the transition in and out will take half a second
    <TransitionContext time={1000}>
    ...
    </TransitionContext>


    <TransitionContext timeOut={600} timeIn={300}>
    ...
    </TransitionContext>    

#### Transition Cycle Function Hooks

There are four function props for the TransitionContext component that can be used to add more functionality during a transition: *outBegin*, *outEnd*, *inBegin* and *inEnd*. *outBegin* will be fired right at the begining of the entire transition, immediately before the leaving route begins its exit. The *outEnd* function will be fired right after that route has completed its exit. The *inBegin* functin will be fired right before the entering route begins is transition in. The *inEnd* function will be fired at the very end of the transition, after the entering route has finished its transition into place.

*Example*: 

    <TransitionContext
      outBegin={() => console.log('Old component is begining its exit')}
      outEnd={() => console.log('Old component has left')}
      inBegin={() => console.log('New component is beginning its entrance')}
      inBegin={() => console.log('New component is beginning its entrance')}>
      ...
    </TransitionContext>

## TransitionLink

The *TransitionLink* component works similarily to react-routers *Link* component and is used to trigger the transition and route change when clicked on.

#### Props:

#### *activeStyles*

The styles to be applied to an active TransitionLink. This will also match sublocations unless the exact prop is used. For example activeStyles for a TransitionLink to '/about' will be applied to '/about' and '/about/subpage'. This prop can be provided either a string or a function that returns a string. If a function is used the links props will be passed to the function as its only argument. The styled component theme prop can be accessed using this if a theme has been set up for your project with the ThemeProvider.

*Example*:

      // String
      <TransitionLink
        activeStyles={activeLink} 
        to='/about'>
        About
      </TransitionLink>
      ...
      const activeLink = `
        color: grey;
        font-weight: bold;
      `

      // Function
      <TransitionLink
        activeStyles={activeLink} 
        to='/about'>
        About
      </TransitionLink>
      ...
      const activeLink = props => `
        color: props.theme.primaryColor;
      `

#### *defaultStyles*

The defaultStyles prop can be used to setup default styles for a TransitionLink. This can be either a string or a function that returns a string. If a function is used components props will be passed as the only argument.

*Example*:

      // String
      <TransitionLink
        defaultStyles={linkStyles} 
        to='/about'>
        About
      </TransitionLink>
      ...
      const linkStyles = `
        font-family: sans-serif;
        border: 1px solid grey;
      `

      // Function
      <TransitionLink
        activeStyles={linkStyles} 
        to='/about'>
        About
      </TransitionLink>
      ...
      const linkStyles = props => `
        color: props.theme.secondaryColor;
      `

#### *exact*

When true, the activeStyles will only be applied if the location is matched exactly. This is useful for a location such as '/' that could match to many paths.

*Example*:

    <TransitionLink exact to='/'>
      Home
    </TransitionLink>


#### *to*

Like the react-router *Link* component, *TransitionLink* also has a 'to' prop which specifies the route you would like to link to. It accepts a string with the URL to route to link to.

*Example*:

    <TransitionLink to='/'>
      Home
    </TransitionLink>
    <TransitionLink to='/about'>
      About
    </TransitionLink>


#### Transition Cycle Fucntion Hooks

Like the *TransitionContext* component, the *TransitionLink* component also has a set of function props that can be used to trigger specific funcionality at a certain time during a transition. This can be useful for updating state in a Nav component at a specific time depending on the *TransitionLink* being clicked on. The 'onBegin' function will fire right when the *TransitionLink* is clicked. The 'onBetween' function will fire after the first route component has transitioned out and the new one is about to begin its entrance. The 'onEnd' function will fire at the end of the transition.

*Example*:

    ...
    updateNav(link) {
      this.setState(() => {
        return { activeNav: link }
      })
    }
    ...
    <TransitionLink to='/'
      onBegin={() => console.log('Begining transition')}
      onBetween={() => this.updateNav('home')}
      onEnd={() => console.log('Transition ended)}>
    Home
    </TransitionLink>

## TransitionGroup

The TransitionGroup component is a component that wraps around the content that you want to animate during a transition. An easy way to achieve this is to wrap all your Routes or your Switch in the TransitionGroup component but can also be wrapped around other content you would like to animate. The component is made up of two divs: the Transition and the Wrapper. Both can be animated seperately and will animate in synce with each other. 

#### Props:

#### *transitionEase* & *wrapperEase*

The *transitionEase* and *wrapperEase* props take a string that allow you define the easing function that you would regularily pass to a CSS animation rule. The *transitionEase* will be applied to the main transition group and the *wrapperEase* will be passed to the wrapper div.

*Example*:

    <TransitionGroup 
      transitionEase='linear' 
      wrapperEase='ease-out'>
      ...
    </TransitionGroup>

#### *transitionStyles* & *wrapperStyles*

The transitionStyles and wrapperStyles props are were you define the styles to be applied to the transition group during the transition. There are several ways to set this up. These props can be either a string, a function that returns a string, an object or a function that returns an object:

#### String:

Using a string in the styles props is the same as applying static styles using a styled component. This may be useful if you just want to style the wrapper to be used as a positioning container but will not change or have any effect when transitions are fired.

*Example:*

    <TransitionGroup wrapperStyles={wrapperStyles}>
      ...
    </TransitionGroup>
    ...
    const wrapperStyles = 'background: black;'

You can use template literals to define multiline CSS similar to how you would with styled components:

*Example:*

    <TransitionGroup wrapperStyles={wrapperStyles}>
      ...
    </TransitionGroup>
    ...
    const wrapperStyles = `
      background: black;
      padding: 2rem;
      border: 1px solid teal;
    `

#### Function that returns a string

A better use of string styles is to use a function that returns a string. The function used will automatically be passed the component props as an argument including the global styled-components' theme if one has been set up. This will still only provide static styles though and will not animate turing a transition.

*Example*:

    <TransitionGroup wrapperStyles={wrapperStyles}>
      ...
    </TransitionGroup>
    ...
    const wrapperStyles = props => `
      background: props.theme.backgroundColor
      border: props.theme.primaryColor
    `

#### Object

In order to apply animation styles to a transition you have to use an object. This object must have certain keys in order to work correctly. Each key should contain a string with the styles that you want to occur during that part of the transition to be applied. You can also add a default key for styles that will always apply to the element unless overwritten by a transition styles, although this key is optional.

*Example*:

    <TransitionGroup transitionStyles={transitionStyles}>
      ...
    </TransitionGroup>
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

    <TransitionGroup transitionStyles={transitionStyles}>
      ...
    </TransitionGroup>
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