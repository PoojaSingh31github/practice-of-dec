// //            os module
const os = require("os");
console.log(os.arch());
const FreeMemory = os.freemem();
console.log(`${FreeMemory /1024 /1024/ 1024}`);
console.log(`${os.totalmem() /1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// //              path module 
const path = require('path');
console.log(path.dirname(`C:/Users/suraj/OneDrive/Desktop/insternshala projects/backend projects/2 dec node practice/osmod/index3.js`))
console.log(path.extname(`C:/Users/suraj/OneDrive/Desktop/insternshala projects/backend projects/2 dec node practice/osmod/index3.js`))
console.log(path.basename(`C:/Users/suraj/OneDrive/Desktop/insternshala projects/backend projects/2 dec node practice/osmod/index3.js`))
console.log(path.parse(`C:/Users/suraj/OneDrive/Desktop/insternshala projects/backend projects/2 dec node practice/osmod/index3.js`))
const MyPath = path.parse(`C:/Users/suraj/OneDrive/Desktop/insternshala projects/backend projects/2 dec node practice/osmod/index3.js`);
console.log(MyPath.base);

// //          import/ export
const {add, name } = require("./import");
console.log(add(6, 6));
console.log(name);

//           npm packages
const chalk = require("chalk");
const validator = require("validator");
// validator, chalk, 
const res = validator.isEmail("poojasingh@gmail.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));
