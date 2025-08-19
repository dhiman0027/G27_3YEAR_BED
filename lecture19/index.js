const express = require('express');
const mongoose = require('mongoose');
const app = express();

const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(3000, () => {
  console.log('🚀 Server started on http://localhost:3000');
});
