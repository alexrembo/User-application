import { checkUserEmailUnique } from '../../utils/api'

export const required = value => value ? undefined : 'Required'

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be at least ${min}` : undefined

export const hasUpperCase = value => value && !/^(?=.*[A-Z])/.test(value) ?
  'Password Should contain at least One UpperCase letter' : undefined
 
export const isMatchWithPassword = currentValues => value =>
  value && currentValues.password && value !== currentValues.password ? `Not match with password` : undefined

export const requiredPassword = currentValues => value =>
  value && !currentValues.password ? `Enter password at first` : undefined

export const asyncValidate = values => {
  return checkUserEmailUnique(values.email).then(emailUnique => {
    if (!emailUnique) {
      throw { email: 'That email is taken' }
    }
  })
}
