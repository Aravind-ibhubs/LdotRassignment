var express = require('express');
var postScheme = require('../model/postModel');

const postRoutes = express.Router();

postRoutes.get("/posts", async(req,res) => {
    try {
        const postsData = await postScheme.find();
        res.status(200).json(postsData);
    } catch(err) {
        res.status(400).json({"Message" : err.message});
    }
})

postRoutes.get("/post/:id", async(req,res) => {
    try {
        const id = req.params.id;
        const postById = await postScheme.findById(id);
        res.status(200).json(postById);
    } catch(err) {
        res.status(400).json({"Message" : err.message});
    }
})

postRoutes.post("/createPost", async(req,res) => {
    try {
        const newPost = new postScheme({
            "title": req.body.title,
            "description": req.body.description,
            "postedOn": req.body.postedOn
        })
        const createdPost = await newPost.save();
        res.status(200).json(createdPost);
    } catch(err) {
        res.status(400).json({"Message" : err.message});
    }
})


postRoutes.put("/updatePost/:id", async(req,res) => {
    try {
        const idOfPost = req.params.id;
        const data = req.body;
        const option = {new: true};

        const updatedPost = await postScheme.findByIdAndUpdate(idOfPost,data, option);
        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(400).json({"Message" : err.message});
    }
})

postRoutes.delete("/deletePost/:id", async(req, res) => {
    try {
        const idOfPost = req.params.id;
        const result = await postScheme.findByIdAndDelete(idOfPost);
        res.status(200).json(result);
    }catch(err) {
        res.status(400).json({"Message" : err.message});
    }
})

module.exports = postRoutes;
