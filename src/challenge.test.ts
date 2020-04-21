import test from 'tape'
import {
  whatIsTheTime,
  hours,
  minutes,
  hoursString,
  convertTimeStringToIntMinutes,
  convertIntMinutesToTimeString,
} from './challenge'

test('Basic Test', assert => {
  assert.plan(1)
  assert.equal(whatIsTheTime('06:35'), '05:25')
})

test('Basic Test', assert => {
  assert.plan(1)
  assert.equal(whatIsTheTime('11:59'), '12:01')
})
test('Basic Test', assert => {
  assert.plan(1)
  assert.equal(whatIsTheTime('12:02'), '11:58')
})
test('Basic Test', assert => {
  assert.plan(1)
  assert.equal(whatIsTheTime('06:00'), '06:00')
})

test('Test hour string to int conversion 1', assert => {
  assert.plan(1)
  assert.equal(hours('12:25'), 0)
})

test('Test hour string to int conversion 2', assert => {
  assert.plan(1)
  assert.equal(hours('05:25'), 5)
})

test('Test minute string to int conversion 1', assert => {
  assert.plan(1)
  assert.equal(minutes('12:25'), 25)
})

test('Test minute string to int conversion 2', assert => {
  assert.plan(1)
  assert.equal(minutes('05:00'), 0)
})

test('Time String to Int conversion 1', assert => {
  assert.plan(1)
  assert.equal(convertTimeStringToIntMinutes('12:21'), 21)
})

test('Time String to Int conversion 1', assert => {
  assert.plan(1)
  assert.equal(convertTimeStringToIntMinutes('02:21'), 141)
})

test('Minutes to hour string 1', assert => {
  assert.plan(1)
  assert.equal(hoursString(21), '12')
})

test('Minutes to hour string 2', assert => {
  assert.plan(1)
  assert.equal(hoursString(121), '02')
})

test('Minutes to time string 1', assert => {
  assert.plan(1)
  assert.equal(convertIntMinutesToTimeString(21), '12:21')
})

test('Minutes to time string 2', assert => {
  assert.plan(1)
  assert.equal(convertIntMinutesToTimeString(361), '06:01')
})
