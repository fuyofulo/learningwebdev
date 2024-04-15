const fs = require("fs");

const readFileSync = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('File contents: ', data);
    } catch (error) {
        console.error('Error reading file: ', error);
    }
};

readFileSync('text.txt')