/**
 * @param min - the minimal number 
 * @param max - the maximum number range 
 * @returns a random number in a range
 */
export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
