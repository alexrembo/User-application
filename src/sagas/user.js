import { put, take, fork, select, cps, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { replace } from 'react-router-redux'
import { startSubmit, stopSubmit, SubmissionError } from 'redux-form'
import R from 'ramda'
import {
  getUsersBase,
  addUserToBase,
  checkUserInBase,
  getUsersAmount
} from '../utils/api'
import { formatDate } from '../utils/helpers'
import {
  setCurrentUser as setCurrentUserAction,
  fillUsers as fillUsersAction,
  setUsersTotalAmount as setUsersTotalAmountAction,
  logOutUser as logOutUserAction
} from '../actions/user'


export function* fetchUsers({ payload: { startIndex = 0, resolve } }) {
  const usersList = yield cps(getUsersBase, startIndex)
  const users = {}
  const usersEmails = usersList.map(user => {
    users[user.email] = user
    return user.email
  })
  yield delay(100)
  yield put(fillUsersAction({
    usersEmails,
    map: users
  }))
  if (resolve) {
    resolve()
  }
}

export function* fetchUsersRequest() {
  yield takeEvery('user/FETCH_USERS_REQUEST', fetchUsers)
}

export function* userRegistration() {
  while (true) {
    const { payload } = yield take('user/USER_REGISTRATION_REQUEST')
    const currentDate = new Date()
    const formatCurrentDate = formatDate(currentDate)
    const userData = R.assoc('lastVisit', formatCurrentDate, R.dissoc('passwordConfirmation', payload))
    const user = yield cps(addUserToBase, userData)
    yield fork(getUsersTotalAmount)
    yield put(setCurrentUserAction(user))
    yield delay(100)
    yield put(replace('/dashboard'))
  }
}

export function* signInUser() {
  while (true) {
    const { payload } = yield take('user/SIGN_IN_USER_REQUEST')
    yield put(startSubmit('LoginForm'))
    const currentDate = new Date()
    const formatCurrentDate = formatDate(currentDate)
    const userData = R.assoc('lastVisit', formatCurrentDate, payload)
    const user = yield cps(checkUserInBase, userData)
    if (user) {
      yield fork(getUsersTotalAmount)
      yield put(setCurrentUserAction(user))
      yield delay(100)
      yield put(replace('/dashboard'))
    } else {
      yield put(stopSubmit('LoginForm', { _error: 'Incorrect password!' }))
    }
  }
}

export function* logOutUser() {
  while (true) {
    yield take('user/LOG_OUT_USER_REQUEST')
    yield put(logOutUserAction())
    yield delay(100)
    yield put(replace('/login'))
  }
}

function* getUsersTotalAmount() {
  const { usersAmount } = yield cps(getUsersAmount)
  yield put(setUsersTotalAmountAction(usersAmount))
}
