import fs from 'fs';

const compose = (a: Function, b: Function) => (x: any) => a(b(x));
const reverse = (array: any[]) => [...array].reverse();

// `get` is a simple accessor function, used for selecting an item in an array.
const get = (id: number) => (array: any[]) => array[id];

// This functional version of map accepts our function first.
const map = (fn: any, array: any[]) => array.map(fn);

// `pluck` allows us to map through a matrix, gathering all the items at a
// specific index.
const pluck = (index: number, data: any) => map(get(index), data);

// `rangeFrom` creates an array equal in length to the array provided,
// but with a 0-based range for values.
// eg. ['a', 'b', 'c'] -> [0, 1, 2]
const rangeFrom = (a: { length: number }) => [...Array(a.length).keys()];

const flipMatrix = (matrix: any[][]) =>
  map((index: number) => pluck(index, matrix), rangeFrom(matrix));

export const rotateMatrix = compose(flipMatrix, reverse);

export const printMatrix = (matrix: any[][]) =>
  matrix.reduce((str, row) => (str += `\n${row}`), '');

export const readDayInputToArray = (day: number) =>
  fs
    .readFileSync(__dirname + `\\day${day}\\input.txt`)
    .toString('utf-8')
    .split('\n');
