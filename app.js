const express = require("express");
const app = express();

const platform = "NETLIFY";
const message = `Hello From ${platform}`

app.get("/",(req,res)=>{
    res.end(message);
});


app.listen(process.env.port,()=>{
    console.log(`app is listening on port ${process.env.port}`)
});