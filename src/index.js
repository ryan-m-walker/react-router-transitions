import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'


const theme = {
  primaryColor: 'teal',
  secondaryColor: 'yellow'
}


const MyApp = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
)


ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
