const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const User = require('../model/user');

router.get("/", async (req, res) => {
  let allBlogs = await Blog.find();
  res.json({
    success: true,
    message: "All data fetched successfully",
    data: allBlogs
  });
});
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog
  });
});
router.post("/", async (req, res) => {
  let { title, body, userId } = req.body;

  let user = await User.findById(userId);
  if (!user) {
    return res.json({
      success: false,
      message: "Invalid user"
    });
  }

  let newBlog = new Blog({
    title,
    body,
    date: Date.now(),
    userId
  });

  await newBlog.save();

  user.blogs.push(newBlog._id);
  await user.save();

  res.json({
    success: true,
    message: "Blog added successfully",
    data: newBlog
  });
});

router.delete("/:blogId", async (req, res) => {
  let blogId = req.params.blogId;
  let userId = req.body.userId;

  let blogExist = await Blog.findById(blogId);

  if (!blogExist) {
    return res.json({
      success: false,
      message: "Blog does not exist"
    });
  }

  if (blogExist.userId != userId) {
    return res.json({
      success: false,
      message: "Permission denied"
    });
  }

  await Blog.findByIdAndDelete(blogId);
  res.json({
    success: true,
    message: "Blog deleted successfully"
  });
});

module.exports = router;
