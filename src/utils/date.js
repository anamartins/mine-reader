export function formatDate(date) {
  const newDate = new Date(date)

  let day = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  let hour = newDate.getHours()
  let minute = newDate.getMinutes()

  month = month.toString().padStart(2, '0')
  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')

  const time = diffDate(newDate)

  const fullDate = `${day}-${month}-${year} ${hour}:${minute} - ${time}`
  return fullDate
}

function diffDate(date) {
  const now = new Date()
  const diff = now - date
  let diffMinutes = diff / 1000 / 60
  diffMinutes = Math.trunc(diffMinutes)
  let diffHours,
    diffDays,
    diffMonths,
    diffYears = 0
  let time = `published ${diffMinutes} minutes ago`
  if (diffMinutes > 60) {
    diffHours = Math.trunc(diffMinutes / 60)
    time = `published ${diffHours} ` + setPlural(diffHours, 'hour')
  }
  if (diffHours > 24) {
    diffDays = Math.trunc(diffHours / 24)
    time = `published ${diffDays} ` + setPlural(diffDays, 'day')
  }

  if (diffDays > 30) {
    diffMonths = Math.trunc(diffDays / 30)
    time = `published about ${diffMonths} ` + setPlural(diffMonths, 'month')
  }

  if (diffDays > 365) {
    diffYears = diffDays / 365
    time = `published ${diffYears} ` + setPlural(diffYears, 'year')
  }

  return time
}

function setPlural(number, unit) {
  if (number === 1) {
    return `${unit} ago`
  } else {
    return `${unit}s ago`
  }
}
