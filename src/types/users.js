// @flow
import type { IdString } from './';

export type UsersEmails = Array<IdString>;

export type UsersIndexedMap = {
  [string]: UserData
};

export type UserData = {
  email: string,
  password: string,
  name: string,
  company: string,
  lastVisit: string
};

export type UsersMetaState = {
  currentUser: ?string,
  usersAmount: ?number
};

export type UsersNormalizePayload = {
  usersEmails: UsersEmails,
  map: UsersIndexedMap
};
