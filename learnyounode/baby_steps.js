const sum = process.argv.filter((value, index) => index > 1)
    .map(value => Number(value))
    .reduce((number, total) => total += number);

console.log(sum);
