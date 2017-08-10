import { checkIsEmail } from '../../utils/api'
export const required = value => value ? undefined : 'Required'

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be at least ${min}` : undefined

export const hasUpperCase = value => value && !/^(?=.*[A-Z])/.test(value) ?
  'Password Should contain at least One UpperCase letter' : undefined

export const asyncValidate = values => {
  return checkIsEmail(values.email).then(isEmail => {
    if (!isEmail) {
      throw { email: 'There is no such email. Please enter another email.' }
    }
  })
}
