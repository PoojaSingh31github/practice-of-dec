const express=require("express");

const app=express();
// body parse
app.use(express.json())

app.use("/api/product",require("./routes/product"));

app.listen(5000,()=>{
    console.log("server on port 5000");
})

