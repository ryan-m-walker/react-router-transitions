import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'


const MyApp = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)


ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
