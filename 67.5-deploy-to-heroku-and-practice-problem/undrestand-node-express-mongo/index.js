const os = require('os');
const fs = require('fs');
// console.log('os version', os.version());
// console.log('os', os.arch());

// fs.writeFileSync('hello.txt', 'I am writting from node');
// fs.appendFileSync('hello.txt', '\n more text ');

const content = fs.readFileSync('hello.txt');
console.log(content.toString());
