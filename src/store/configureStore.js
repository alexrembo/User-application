import 'babel-polyfill'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { persistStore, autoRehydrate } from 'redux-persist'

import rootReducer from '../reducers'

import mySaga from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = routerMiddleware(browserHistory)
  const enhancer = composeEnhancers(
    applyMiddleware(middleware, sagaMiddleware)
  )
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      enhancer,
      autoRehydrate()
    )
  )

  persistStore(store, { whitelist: ['users']})

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(mySaga)
  return store
}
