const User=require("../model/user");
const 
module.exports.postAddBlog=async (req, res) => {
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
};
module.exports.deleteOneBlog=async (req, res) => {
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
};
module.exports.getAllBlog=async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog
  });
};
module.exports.getOneBlog=async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog
  });
};