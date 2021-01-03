const route = require("express").Router();
const controller = require("../controllers/home.controller");
const Post= require('../models/blogs.model');
const mongoose= require('mongoose');

route.get("/", controller.getHome);

route.get("/create", controller.getCreate);

route.post('/create',(req,res)=>
{
    // const title= req.body.title;
    // const tag=req.body.tag;
    // const content=req.body.Content;
    // console.log(title);
    // console.log(tag);
    // console.log(content);
    insertRecord(req,res);
});



const insertRecord = (req, res) => 
{
    const post = new Post();

    post.Title = req.body.Title;
    
    post.Tag = req.body.Tag;

    post.Content = req.body.Content;

    post.save((err, doc) => {
        console.log(doc);
        if (!err) {
            res.redirect('/list');
        } else {
            console.log('Error during record Insertion : ' + err);
        }
    });
};
route.get('/list',(req, res)=>
{
    return res.json('Here in the List');
});


module.exports = route;
