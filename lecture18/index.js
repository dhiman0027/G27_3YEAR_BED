const express = require('express');
const mongoose = require('mongoose');
const Blog = require("./model/blog");
const User = require("./model/user"); 

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/blogs", async (req, res) => {
    try {
        const { title, body, userId } = req.body;

        let blog = new Blog({
            title,
            body,
            date: Date.now(),
            userId
        });

        await blog.save();

        res.json({
            success: true,
            message: "Blog added successfully",
            data: blog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
app.get("/blogs", async (req, res) => {
    try {
        let allBlogs = await Blog.find().populate("userId");
        res.json({
            success: true,
            message: "All blogs fetched successfully",
            data: allBlogs
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
app.get("/blogs/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let blog = await Blog.findById(id).populate("userId");
        res.json({
            success: true,
            message: "Blog fetched successfully",
            data: blog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
app.get("/users", async (req, res) => {
    try {
        let allUsers = await User.find().populate("blogs");
        res.json({
            success: true,
            message: "All users fetched successfully",
            data: allUsers
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
