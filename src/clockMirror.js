function WhatIsTheTime(timeInMirror) {
  //"05:25" --> "06:35";
  // Happy Coding
  const hour = parseInt(timeInMirror.split(':')[0]) % 12
  const minute = parseInt(timeInMirror.split(':')[1])

  const resultInMinutes = 720 - (hour * 60 + minute)

  let hours = Math.floor(resultInMinutes / 60)
  let minutes = Math.floor(resultInMinutes % 60)

  if (hours === 0) {
    hours = 12
  }

  if (hours.toString().length === 1) {
    hours = `0${hours}`
  }

  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}`
}

module.exports = { WhatIsTheTime }
