/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rnd = (seed :any ) => ((seed * 9301 + 49297) % 233280) / 233280.0;
const rand = (number:any) =>
  Math.floor(rnd(new Date().getTime() * Math.random()) * number);
export const randStr = (len: number, x = 'abcdefhijkmnprstwxyz2345678') => {
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(rand(maxPos));
  }
  return pwd;
};
