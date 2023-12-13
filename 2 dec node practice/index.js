console.log("my starting of code");

// prerequisites
// repl
// type nul > server.js 


const fs = require("fs");
fs.writeFileSync('read.txt', "welcome to my project")
fs.writeFileSync('read.txt', "pooja singh, welcome to my project")
fs.appendFileSync('read.txt', 'hoe are you guysssss')

const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);
// {/* <Buffer 70 6f 6f 6a 61 20 73 69 6e 67 68 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 70 72 6f 6a 65 
// 63 74 68 6f 65 20 61 72 65 20 79 6f 75 20 67 75 79 73 ... 4 more bytes> */}
org_data = buf_data.toString();
console.log(org_data);

// CRUD    create read update delete

fs.writeFile('create.txt', 'today is awsome day :)');
//           npm packages
const chalk = require("chalk");
const validator = require("validator");
// validator, chalk, 
const res = validator.isEmail("poojasingh@gmail.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));

console.log("poooja".green.inverse());

