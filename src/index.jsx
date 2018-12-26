import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
import '../node_modules/semantic-ui-css/semantic.min.css'
import '../node_modules/react-app-polyfill/ie9'

render(
    <App/>,
  document.getElementById('app'),
)
