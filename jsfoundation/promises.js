const fs = require('fs');
const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

readFilePromise('text.txt')
    .then((data) => {
        console.log('File contents: ',data);
    })
    .catch((error) => {
        console.error("error reading file: ", error);
    });


