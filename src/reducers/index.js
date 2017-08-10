// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './users'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  users,
  form: formReducer,
  routing: routerReducer
})