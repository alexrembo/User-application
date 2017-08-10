import { fork } from 'redux-saga/effects'

import {
  userRegistration,
  fetchUsersRequest,
  signInUser,
  logOutUser
} from './user'

export default function* root() {
  yield [
    fork(fetchUsersRequest),
    fork(userRegistration),
    fork(signInUser),
    fork(logOutUser)
  ]
}
