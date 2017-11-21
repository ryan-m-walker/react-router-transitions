import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

class App extends Component {

  state = {
    transitioning: false
  }

  changeRoute = path => {
    this.setState(() => ({ transitioning: true }))
    setTimeout(() => {
      this.props.history.push(path)
      this.setState(() => ({ transitioning: false }))
    }, 1000);
  }

  render() {
    const { history } = this.props
    const { transitioning } = this.state
    return (
      <div className="App">
        <Header changeRoute={this.changeRoute} history={history}/>
        <Route path='/test' render={() => <Test transitioning={transitioning} />} />
        <Route path='/test2' render={() => <Test2 transitioning={transitioning} />} />
      </div>
    );
  }
}

const Test = ({transitioning}) => {
  console.log(transitioning)
  return (
    <TransitionGroup transitioning={transitioning}>
      <h3>Test</h3>
    </TransitionGroup>
  )
}


const fadeIn = keyframes(`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`)

const TransitionGroup = styled.div`
  opacity: ${({transitioning}) => transitioning ? 0 : 1 };
  transition: opacity 1000ms;
  animation: ${fadeIn} 1000ms 1000ms;
`



const Test2 = props => {
  return <h3>Test 2</h3>
}

const Header = ({changeRoute}) => (
  <div>
    <h1>Header</h1>
    <button onClick={() => changeRoute('/test')}>Test</button>
    <button onClick={() => changeRoute('/test2')}>Test2</button>
  </div>
)

export default App;
