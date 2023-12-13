// creating, updateing, renaming, deleting the file

const fs = require("fs");
fs.writeFileSync("bio.txt", "hey there is new try.... hope you like it");
// fs.mkdirSync("pooja");

const buf_data = fs.readFileSync('bio.txt');
 console.log(buf_data);

fs.renameSync("bio.txt", "MyBio.txt");
fs.unlinkSync("MyBio.txt");
