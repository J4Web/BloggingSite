const route = require("express").Router();
const controller = require("../controllers/home.controller");
const Post= require('../models/blogs.model');
const mongoose= require('mongoose');

route.get("/", controller.getHome);

route.get("/create", controller.getCreate);

route.post('/create', async (req,res) =>{

    const {title,tag,content} = req.body;
    try{
        const post = await new Post({title,tag,content })
        if(post){
            res.redirect('/')
        }else{
            console.log('Failed to save the blog')
            res.redirect('/create')
        }
    }catch(err){
        console.log(err)
    }
});

route.get('/list',(req, res)=>
{
    return res.json('Here in the List');
});


module.exports = route;
