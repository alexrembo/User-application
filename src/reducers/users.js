// @flow
import { combineReducers } from 'redux'
import { REHYDRATE } from 'redux-persist/constants'
import R from 'ramda'

import type {
  Action,
  UsersIndexedMap,
  UsersEmails,
  UsersMetaState
} from '../types'


function allItems(state: UsersEmails = [], action: Action) {
  switch (action.type) {
    case 'user/FILL_USERS':
      return R.union(state, action.payload.usersEmails)
    case 'user/LOG_OUT_USER':
      return []
    default:
      return state
  }
}

function itemsByEmail(state: UsersIndexedMap = {}, action: Action) {
  switch (action.type) {
    case 'user/FILL_USERS':
      return {
        ...state,
        ...action.payload.map
      }
    case 'user/LOG_OUT_USER':
      return {}
    default:
      return state
  }
}


const initialMeta = {
  currentUser: null,
  usersAmount: null
}

function meta(state: UsersMetaState = initialMeta, action: Action) {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload.users) {
        return {
          ...state,
          ...action.payload.users.meta
        }
      }
      return state
    }
    case 'user/LOG_OUT_USER':
      return initialMeta
    case 'user/SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'user/SET_USERS_TOTAL_AMOUNT_AMOUNT':
      return {
        ...state,
        usersAmount: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  byEmail: itemsByEmail,
  allEmails: allItems,
  meta
})
