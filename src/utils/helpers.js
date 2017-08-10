import R from 'ramda'

export const formatDate = date => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() % 100
  const hours =  date.getHours()
  const minutes = date.getMinutes()
  const formatDay = day < 10 ? `0${day}` : day
  const fotmatMonth = month < 10 ? `0${month}` : month
  const formatYear = year < 10 ? `0${year}` : year
  const formatHours = hours < 10 ? `0${hours}` : hours
  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${formatDay}.${fotmatMonth}.${formatYear} ${formatHours}:${formatMinutes}`
}
