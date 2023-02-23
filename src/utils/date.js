export function formatDate(date) {
  const newDate = new Date(date)

  let day = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  let hour = newDate.getHours()
  let minute = newDate.getMinutes()

  day = day.toString().padStart(2, '0')
  month = month.toString().padStart(2, '0')
  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')

  const timeAgo = diffDate(newDate)

  const fullDate = `${day}-${month}-${year} ${hour}:${minute} - ${timeAgo}`
  return { timeAgo, fullDate }
}

function diffDate(date) {
  const now = getNow()
  const diff = now - date
  let diffMinutes = diff / 1000 / 60
  diffMinutes = Math.trunc(diffMinutes)
  let diffHours,
    diffDays,
    diffMonths,
    diffYears = 0
  // let time = `published ${diffMinutes} minutes ago`
  let time = `${diffMinutes} minutes`
  if (diffMinutes > 60) {
    diffHours = Math.trunc(diffMinutes / 60)
    time = `${diffHours} ` + setPlural(diffHours, 'hour')
  }
  if (diffHours > 24) {
    diffDays = Math.trunc(diffHours / 24)
    time = `${diffDays} ` + setPlural(diffDays, 'day')
  }

  if (diffDays > 30) {
    diffMonths = Math.trunc(diffDays / 30)
    time = `${diffMonths} ` + setPlural(diffMonths, 'month')
  }

  if (diffMonths >= 12) {
    diffYears = Math.trunc(diffMonths / 12)
    time = `${diffYears} ` + setPlural(diffYears, 'year')
  }

  return time
}

function setPlural(number, unit) {
  if (number === 1) {
    return `${unit}`
  } else {
    return `${unit}s`
  }
}

function getNow() {
  return new Date()
}
