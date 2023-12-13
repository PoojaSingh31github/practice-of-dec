const fs = require("fs");
fs.writeFile('create.txt', 'today is awsome day :)', 
(err)=>{
    console.log("files is created");
    console.log(err);
});
fs.appendFile("create.txt", " lets enjoy", 
(err)=>{
    console.log("appending the file done");
});
 fs.readFile('create.txt',"UTF-8",
 (err, data)=>{
  console.log(data);
 })

 fs.rename("create.txt", "MyCreated.txt", 
 (err)=>{
    console.log("rename is done");
 })

fs.unlink("MyCreated.txt",
 (err)=>{
 console.log("deleted");
});
