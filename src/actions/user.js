// @flow
import type {
  Action,
  IdString,
  UsersNormalizePayload,
  UserData
} from '../types'

export const fetchUsersTotalAmountRequest = (): Action =>
  ({
    type: 'user/FETCH_USERS_TOTAL_AMOUNT_REQUEST'
  })

export const setUsersTotalAmount = (payload: number
  ): Action =>
  ({
    type: 'user/SET_USERS_TOTAL_AMOUNT_AMOUNT',
    payload
  })

export const fetchUsersRequest = (payload: number): Action =>
  ({
    type: 'user/FETCH_USERS_REQUEST',
    payload
  })

export const fillUsers = (payload: UsersNormalizePayload): Action =>
  ({
    type: 'user/FILL_USERS',
    payload
  })

export const userRegistrationRequest = (payload: UserData): Action =>
  ({
    type: 'user/USER_REGISTRATION_REQUEST',
    payload
  })

export const setCurrentUser = (payload: IdString): Action =>
  ({
    type: 'user/SET_CURRENT_USER',
    payload
  })

export const signInUserRequest = (payload: UserData): Action =>
  ({
    type: 'user/SIGN_IN_USER_REQUEST',
    payload
  })

export const logOutUserRequest = (): Action =>
  ({
    type: 'user/LOG_OUT_USER_REQUEST'
  })

export const logOutUser = (): Action =>
  ({
    type: 'user/LOG_OUT_USER'
  })

