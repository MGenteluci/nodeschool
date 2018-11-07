const myMod = require('./make_it_modular_module');

const dirName = process.argv[2];
const extension = process.argv[3];

const cb = (err, data) => {
    if (err) {
        throw new Error('Ooops, something went wrong!');
    }

    data.map(file => console.log(file));
};

myMod(dirName, extension, cb);
