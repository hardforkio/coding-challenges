export const timestampToMinutes = (stringTime: string) => {
  const h = parseInt(stringTime.substring(0, 3));
  const m = parseInt(stringTime.substring(4, 6));
  return 60 * h + m;
};

export const minutesToTimestamp = (minutes: number) => {
  const padTo2Digits = (n: number) => n.toString().padStart(2);
  const h = minutes / 60;
  const m = minutes % 60;
  return `${padTo2Digits(h)}:${padTo2Digits(m)}`;
};
