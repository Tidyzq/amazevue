const formatRE = /(yyyy|mm|m|dd|d)/g

export function parseFormat (format) {
  let sta = 0, match, rst = []
  while ((match = formatRE.exec(format))) {
    if (sta < match.index) {
      rst.push(format.substr(sta, match.index - sta))
    }
    rst.push(match[0])
    sta = match.index + match[0].length
  }
  if (sta < format.length) rst.push(format.substr(sta))
  return rst
}

export function formatDate (date, format) {
  let m = date.getMonth() + 1
  let d = date.getDate()
  let val = {
    yyyy: date.getFullYear(),
    m: m,
    mm: m < 10 ? '0' + m : m,
    d: d,
    dd: d < 10 ? '0' + d : d
  }
  let rst = ''
  let formatParts = parseFormat(format)
  for (let part of formatParts) {
    if (val[part]) {
      rst += val[part]
    } else {
      rst += part
    }
  }
  return rst
}

export function parseDate (dateStr, format) {
  let date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  let formatParts = parseFormat(format)
  for (let part of formatParts) {
    let val = parseInt(dateStr, 10) || -1
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
    }
    dateStr = dateStr.substr(part.length)
  }
  return date
}

export function isLeapYear (year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
}

export function getDaysInMonth (year, month) {
  let monthDays = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return monthDays[month]
}
