import { createSelector } from 'reselect'

export const getUsersMap = ({ users }) => users.byEmail
export const getUsersbyEmails = ({ users }) => users.allEmails

export const getUsers = createSelector(
  [getUsersbyEmails, getUsersMap],
  (emails, map) => emails.map(email => map[email])
)