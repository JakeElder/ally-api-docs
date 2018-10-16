import React, { createElement } from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App'

render(
  createElement(hot(module)(App)),
  document.getElementById('app-root')
)
