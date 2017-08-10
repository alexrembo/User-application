// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type {
  UsersEmails,
  UsersIndexedMap,
  UsersMetaState,
  UsersNormalizePayload,
  UserData
} from './users';

export * from './users';

export type IdString = string;

export type Action =
  { type: 'users/FILL_USERS', +payload: UsersNormalizePayload }
| { type: 'users/LOG_OUT_USER_REQUEST' }
| { type: 'users/LOG_OUT_USER' }
| { type: 'users/SET_CURRENT_USER', +payload: IdString }
| { type: 'users/SET_USERS_TOTAL_AMOUNT_AMOUNT', +payload: number }
| { type: 'users/FETCH_USERS_TOTAL_AMOUNT_REQUEST' }
| { type: 'users/FETCH_USERS_REQUEST', +payload: number }
| { type: 'users/USER_REGISTRATION_REQUEST', +payload: UserData }
| { type: 'users/SIGN_IN_USER_REQUEST', +payload: UserData }
| Object
;

export type State = {
  +users: {
    +byEmail: UsersIndexedMap,
    +allEmails: UsersEmails,
    +meta: UsersMetaState
  }
};

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
