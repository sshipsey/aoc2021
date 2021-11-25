import fs from 'fs';
import { readDayInputToArray } from '../lib';

console.log(readDayInputToArray(1));
for (let i = 2; i < 26; i++) {
  fs.mkdirSync(`./day${i}`);
  fs.closeSync(fs.openSync(`./day${i}/day${i}.ts`, 'w'));
  fs.closeSync(fs.openSync(`./day${i}/day${i}.swift`, 'w'));
  fs.closeSync(fs.openSync(`./day${i}/input.txt`, 'w'));
}
