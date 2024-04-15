const fs = require('fs');
const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

async function readAndLogFile(filePath) {
    try {
        const data = await readFilePromise(filePath);
        console.log("Contents of file: ", data);
    } catch(error) {
        console.error("Error reading file: ", error);
    }
}

readAndLogFile('text.txt');