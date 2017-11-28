import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes/routes'
import './index.css'
import theme from './themes/theme'
import registerServiceWorker from './registerServiceWorker'


const MyApp = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
)


ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
