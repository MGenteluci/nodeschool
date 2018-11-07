const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        throw new Error('Oops, could not read the file');
    }

    console.log(data.split('\n').length - 1);
});

