const express = require("express");
const app = express();

// const staticPath= path.join()

// app.use(express.static(staticPath));
app.get("/",(req, res)=>{
  res.write("hello hy by byy ");
  res.write("hello hy by byy ");
  res.write("hello hy by byy ");
  res.send();
})
app.get("/about",(req, res)=>{
  res.send("about meeeee ")
})
app.get("/contact",(req, res)=>{
  res.send("contact ")
})
// app.get("/temp",(req, res)=>{
//   res.send([
//     {
//       id:1,
//       name:"pooja",
//     },
//     {
//       id:1,
//       name:"pooja",
//     },
//     {
//       id:1,
//       name:"pooja",
//     },
//     {
//       id:1,
//       name:"pooja",
//     }
//   ])
// })
app.get("/temp",(req, res)=>{

res.json([
  {
    id:1,
    name:"pooja",
  },
  {
    id:1,
    name:"pooja",
  }
  
])
})

app.listen(8000, ()=>{
    console.log("listening");
})

