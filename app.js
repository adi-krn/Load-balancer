const express=require("express");
const app=express();
const PORT=process.env.PORT || 4000;
const server=process.env.server || "Gateway";

app.get("/",(req,res,next)=>{
    return res.send(`<h1>This request will redirect to server ${server}</h1>`);
});

app.listen(PORT,()=>{
    console.log("Server is running :)")
})
