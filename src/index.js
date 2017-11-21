import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes'
import App from './App'
import { Router, Route } from 'react-router-dom'
import HistoryProvider from './RouterTransition/HistoryProvider'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


const MyApp = () => (
  <Router history={history}>
    <HistoryProvider history={history}>
      <Routes history={history}/>
    </HistoryProvider>
  </Router>
)

const TestApp = () => (
  <Router history={history}>
    <HistoryProvider history={history}>
      <App />
    </HistoryProvider>
  </Router>
)


ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
