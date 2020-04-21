export function hours(time: string): number {
  let hourString = time.slice(0, 2)
  if (time.slice(0, 2) === '12') {
    hourString = '00'
  }
  return parseInt(hourString)
}

export function minutes(time: string): number {
  return parseInt(time.slice(3, 5))
}

export function convertTimeStringToIntMinutes(time: string): number {
  return 60 * hours(time) + minutes(time)
}

export function mirrorAngleOnVerticalAxis(halfdegrees: number): number {
  return -halfdegrees + 12 * 60
}

export function minutesString(minutes: number): string {
  return `0${minutes % 60}`.substr(-2)
}

export function hoursString(minutes: number): string {
  const hours = `0${(minutes - (minutes % 60)) / 60}`.substr(-2)
  if (hours === '00') {
    return '12'
  } else {
    return hours
  }
}

export function convertIntMinutesToTimeString(minutes: number): string {
  const minutesbase60 = minutes % 60
  let hours = (minutes - minutesbase60) / 60
  if (hours === 0) {
    hours = 12
  }
  const hourString = ('00' + `${hours}`).substr(-2)
  const minuteString = ('00' + `${minutesbase60}`).substr(-2)
  return hourString + ':' + minuteString
}
// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
export function whatIsTheTime(timeInMirror: string): string {
  // "05:25" --> "06:35";
  // Happy Coding

  const timeInt: number = convertTimeStringToIntMinutes(timeInMirror)
  const mirroredInt: number = mirrorAngleOnVerticalAxis(timeInt)
  const mirroredTime = convertIntMinutesToTimeString(mirroredInt)
  return mirroredTime
}
