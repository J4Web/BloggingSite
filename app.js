const express= require('express');
const app=express();
app.use(express.static("public"));
app.get('/', (_req,res)=>
{
    res.sendFile(__dirname+"/index.html");
});


app.listen(8080, ()=>
{
    console.log("Running on port 8080!");
})