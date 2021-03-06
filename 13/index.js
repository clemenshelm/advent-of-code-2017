const getRootElement = require('./getRootElement.js');
const [,, input,] = process.argv;

const elements = input
  .split(/\n/)
  .map(e => e.match(/([^\s]+) \((\d+)\)(?: -> (.+))?$/))
  .map(([, name, weight, children]) =>
    ({ name, weight: parseInt(weight, 10), children: (children && children.split(', ')) }));

console.log(getRootElement(elements).name);
