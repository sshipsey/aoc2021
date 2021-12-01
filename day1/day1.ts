import { readDayInputToArray } from '../lib';

(function () {
  const input = readDayInputToArray(1).map(Number);
  let total = 0;
  for (let i = 0; i < input.length - 3; ++i) {
    if (input[i] < input[i + 3]) {
      total++;
    }
  }
  console.log(total);
})();
