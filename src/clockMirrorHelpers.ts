const timestampToMinutes = (stringTime: string) => {
  const h = parseInt(stringTime.substring(0, 3));
  const m = parseInt(stringTime.substring(4, 6));
  return 60 * h + m;
};

const minutesToTimestamp = (minutes: number) => {
  const padTo2Digits = (n: number) => n.toString().padStart(2);
  const h = minutes / 60;
  const m = minutes % 60;
  return `${padTo2Digits(h)}:${padTo2Digits(m)}`;
};

const strangeTimetoModulo720Time = (t: number) => t - 60;
const modulo720TimeToStrangeTime = (t: number) => t + 60;

//fixme more descriptive name
const weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin = (t: number) =>
  ((t - 11 * 60) % 12) * 60;
const goodCoordinteSystemOriginToWeirdCoordinateSystemOrigin = (t: number) =>
  ((t + 11 * 60) % 12) * 60;

module.exports = {
  timestampToMinutes,
  minutesToTimestamp,
  strangeTimetoModulo720Time,
  modulo720TimeToStrangeTime,
  weirdCoordinteSystemOriginToGoodCoordinateSystemOrigin,
  goodCoordinteSystemOriginToWeirdCoordinateSystemOrigin
};
