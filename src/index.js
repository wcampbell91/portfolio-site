import React from 'react'
import ReactDOM from 'react-dom'
import WithRouterApp from './App'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.scss'

ReactDOM.render(
  <Router>
    <WithRouterApp />
  </Router>,
  document.getElementById('root')
)
