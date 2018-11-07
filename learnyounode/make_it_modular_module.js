const fs = require('fs');

module.exports = read = (dirName, fileExtension, callback) => {
    fs.readdir(dirName, (err, data) => {
        if (err) {
            return callback(err);
        }

        const files = data.filter(file => file.split('.')[1] === fileExtension);
        return callback(null, files);
    });
};
