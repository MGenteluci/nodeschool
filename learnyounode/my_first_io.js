const fs = require('fs');

const path = process.argv[2];

const file = fs.readFileSync(path);
const linesCount = String(file).split('\n').length;

console.log(linesCount - 1);
