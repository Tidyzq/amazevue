const formatRE = /(yyyy|mm|m|dd|d)/g

export function parseFormat (format) {
  let sta = 0, match
  const rst = []
  while ((match = formatRE.exec(format))) {
    if (sta < match.index) {
      rst.push(format.substr(sta, match.index - sta))
    }
    rst.push(match[0])
    sta = match.index + match[0].length
  }
  if (sta < format.length) {
    rst.push(format.substr(sta))
  }
  return rst
}

export function formatDate (date, format) {
  const m = date.getMonth() + 1
  const d = date.getDate()
  const val = {
    yyyy: date.getFullYear(),
    m,
    mm: m < 10 ? '0' + m : m,
    d,
    dd: d < 10 ? '0' + d : d,
  }
  let rst = ''
  const formatParts = parseFormat(format)
  for (const part of formatParts) {
    if (val[part]) {
      rst += val[part]
    } else {
      rst += part
    }
  }
  return rst
}

export function parseDate (dateStr, format) {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  const formatParts = parseFormat(format)
  for (const part of formatParts) {
    const val = parseInt(dateStr.substr(0, part.length), 10)
    if (!isNaN(val)) {
      switch (part) {
      case 'yyyy':
        date.setFullYear(val)
        break
      case 'm':
      case 'mm':
        date.setMonth(val - 1)
        break
      case 'd':
      case 'dd':
        date.setDate(val)
        break
      default:
        break
      }
    }
    dateStr = dateStr.substr(part.length)
  }
  return date
}

export function isLeapYear (year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
}

export function getDaysInMonth (year, month) {
  const monthDays = [ 31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
  return monthDays[month]
}

export function beforeMonth (date, month) {
  return (date.getFullYear() < month.getFullYear()) ||
    (date.getFullYear() === month.getFullYear() && date.getMonth() < month.getMonth())
}

export function afterMonth (date, month) {
  return (date.getFullYear() > month.getFullYear()) ||
    (date.getFullYear() === month.getFullYear() && date.getMonth() > month.getMonth())
}

export function beforeYear (date, year) {
  return date.getFullYear() < year.getFullYear()
}

export function afterYear (date, year) {
  return date.getFullYear() > year.getFullYear()
}
