import React from 'react'
import { render } from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configureStore'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { routes } from '../routes'
import App from '../containers/App'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
  <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)