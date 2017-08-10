import { USERS_BASE_FILE_URL, API_URL } from '../constants/constants'

export const getUsersBase = (startIndex, callback) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/get/users`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ startIndex })
  })
  .then((response) => response.json())
  .then((data) => callback(null, data))
}

export const checkUserEmailUnique = email => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/check/email`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ email })
  })
  .then((response) => response.json())
}

export const checkIsEmail = email => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/check/isEmail`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ email })
  })
  .then((response) => response.json())
}

export const addUserToBase = (userData, callback) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  fetch(`${API_URL}/add/user`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(userData)
  })
  .then(() => callback(null, userData))
}

export const checkUserInBase = (userData, callback) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/check/user`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(userData)
  })
  .then((response) => response.json())
  .then((data) => callback(null, data))
}

export const getUsersAmount = callback => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  return fetch(`${API_URL}/get/users/amount`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  })
  .then((response) => response.json())
  .then((data) => callback(null, data))
}
