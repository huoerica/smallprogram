const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const stringToDate = (dateStr, separator) => {
  if (!separator) {
    separator = '-'
  }
  let dateArr = dateStr.slice(0, 10).split(separator)
  let timeArr = dateStr.slice(11).split(":")
  let year = parseInt(dateArr[0])
  let month;
  if (dateArr[1].indexOf('0') == '0') { //月份<10
    month = parseInt(dateArr[1].substring(1))
  } else { //月份>=10
    month = parseInt(dateArr[1])
  }
  let day = parseInt(dateArr[2])

  let hour = parseInt(timeArr[0]) || ''
  let minute = parseInt(timeArr[1]) || ''
  let second = parseInt(timeArr[2]) || ''
  var date = new Date(year, month - 1, day, hour, minute, second)
  return date
}

const getTime = date => {
  let end = new Date();
  let endYear = end.getFullYear();
  let endMonth = end.getMonth() + 1;
  let endDay = end.getDate();
  let endHour = end.getHours();
  let endMinute = end.getMinutes();
  let endSecond = end.getSeconds();

  let start = stringToDate(date);
  let startYear = start.getFullYear();
  let startMonth = start.getMonth() + 1;
  let startDay = start.getDate();
  let startHour = start.getHours();
  let startMinute = start.getMinutes();
  let startSecond = start.getSeconds();
  
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber
}