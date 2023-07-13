const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModal");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  // checking if all the fields are available
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  // checking if user is already available
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("The hashed password: ", hashedPassword);

  // Storing the user into the mongo
  const user = await User.create({
    userName,
    email,
    password: hashedPassword, // storing the hashed password onto the mongo
  });
  console.log(`User is Created ${user}`);
  if (user) {
    res
      .status(201)
      .json({ _id: user._id, userName: user.userName, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});
module.exports = { registerUser, loginUser, currentUser };
