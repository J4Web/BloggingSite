const route = require("express").Router();
const controller = require("../controllers/home.controller");
const Post = require('../models/blogs.model');
const mongoose = require('mongoose');

route.get("/", controller.getHome);

route.get("/create", controller.getCreate);

route.post('/create', (req, res) => {

    const {
        title,
        tag,
        content
    } = req.body;
    try {
        const post = new Post({
            title,
            tag,
            content
        });
        if (post) {
            console.log(title, tag, content);
            post.save().then(result => {
                console.log('okay going');
                
                console.log(result);
                res.redirect('/');
            }).catch(err => console.log(err));
        } else {
            console.log('Failed to save the blog');
            res.redirect('/create');
        }
    } 
    catch (err) {
        console.log(err);
    }
});
module.exports = route;