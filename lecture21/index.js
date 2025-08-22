const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const User = mongoose.model("User", userSchema);

// Register API
app.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;

    // check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ username, email });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully", user: newUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Login API (check by email)
app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Login successful", user });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
