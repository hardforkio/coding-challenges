import { min } from 'ramda'

// Taken from https://www.codewars.com/kata/clock-in-mirror/javascript
export function WhatIsTheTime(timeInMirror: string) {
  // "05:25" --> "06:35";
  // Happy Coding

  const ConvertTimeStringToIntMinutes = function(time: string) {
    let hourString: string = time.slice(0, 2)
    const minuteString: string = time.slice(3, 5)
    if (hourString === '12') {
      hourString = '00'
    }
    const hourInt: number = parseInt(hourString)
    const minuteInt: number = parseInt(minuteString)
    return 60 * hourInt + minuteInt
  }

  const MirrorAngleOnVerticalAxis = (halfdegrees: number) =>
    -halfdegrees + 12 * 60

  const ConvertIntMinutesToTimeString = function(minutes: number) {
    const minutesbase60 = minutes % 60
    let hours = (minutes - minutesbase60) / 60
    if (hours === 0) {
      hours = 12
    }
    const hourString = ('00' + `${hours}`).substr(-2)
    const minuteString = ('00' + `${minutesbase60}`).substr(-2)
    return hourString + ':' + minuteString
  }

  const timeInt: number = ConvertTimeStringToIntMinutes(timeInMirror)
  const mirroredInt: number = MirrorAngleOnVerticalAxis(timeInt)
  const mirroredTime = ConvertIntMinutesToTimeString(mirroredInt)
  return mirroredTime
}
