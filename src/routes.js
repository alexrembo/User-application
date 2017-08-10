import React from 'react'
import R from 'ramda'
import App from './containers/App'
import Registration from './containers/Registration'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import { IndexRedirect, Route } from 'react-router'

function checkLoggedIn(nextState, replace) {
  const pathname = nextState.location.pathname
  const userState = localStorage.getItem('reduxPersist:users') ?
    JSON.parse(localStorage.getItem('reduxPersist:users')) : {}
  if (!R.isEmpty(userState)) {
    const currentUser = userState.meta.currentUser
    if (currentUser && ['/login', '/registration'].includes(pathname)) {
      replace('/dashboard')
    } else if (!currentUser && ['/dashboard', '/profile'].includes(pathname)) {
      replace('/login')
    } 
  }
}

export const routes = (
  <Route path='/' component={ App }>
    <IndexRedirect to="login" />
    <Route path="profile" component={ Profile } onEnter={ checkLoggedIn } />
    <Route path="login" component={ Login } onEnter={ checkLoggedIn } />
    <Route path="registration" component={ Registration } onEnter={ checkLoggedIn } />
    <Route path="dashboard" component={ Dashboard } onEnter={ checkLoggedIn } />
  </Route>
)
