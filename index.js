// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Polyfills- map | reduce | filter</h1>`;

// polyfill for map

Array.prototype.customMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const array = [3, 4, 5, 6, 7];

const subtractBy2 = array.customMap((num) => {
  return num - 2;
});

// polyfill for filter

Array.prototype.customFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const filterEven = array.customFilter((num) => {
  return num % 2 === 0;
});

// polyfill for reduce

Array.prototype.customReduce = function (cb, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sumWithReduce = array.customReduce((acc, curr) => {
  return acc * curr;
});

console.log(sumWithReduce);
console.log(subtractBy2);
console.log(filterEven);
