import test from "tape";
import {
  WhatIsTheTime,
  saneTimeNotationToCrazyTimeNotation,
  crazyTimeNotationToSaneTimeNotation
} from "./clockMirror";
import { minutesToTimestamp, timestampToMinutes } from "./clockMirrorHelpers";

test("Basic Test", assert => {
  assert.plan(1);
  assert.equal(WhatIsTheTime("06:35"), "05:25");
});

test("Basic Test", assert => {
  assert.plan(1);
  assert.equal(WhatIsTheTime("11:59"), "12:01");
});
test("Basic Test", assert => {
  assert.plan(1);
  assert.equal(WhatIsTheTime("12:02"), "11:58");
});
test("Basic Test", assert => {
  assert.plan(1);
  assert.equal(WhatIsTheTime("06:00"), "06:00");
});

test("Date Parsing", assert => {
  assert.plan(1);
  assert.equal(timestampToMinutes("06:35"), 6 * 60 + 35);
});

test("Date Writing", assert => {
  assert.plan(1);
  assert.equal(minutesToTimestamp(6 * 60 + 35), "06:35");
});

test("Format Conversion, Simplifying", assert => {
  assert.plan(2);
  assert.equal(crazyTimeNotationToSaneTimeNotation("12:02"), 2);
});

test("Format Conversion, Obfuscating", assert => {
  assert.plan(2);
  assert.equal(saneTimeNotationToCrazyTimeNotation(2), "12:02");
});
