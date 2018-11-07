const fs = require('fs');

const path = process.argv[2];
const extension = process.argv[3];

fs.readdir(path, (err, directory) => {
    if (err) {
        throw new Error('Ooops, could not read the directory');
    }

    directory.filter(file => file.split('.')[1] === extension)
        .map(file => console.log(file));
});
