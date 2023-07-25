const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModal");
const jwt = require("jsonwebtoken");
const secretToken = process.env.ACCESS_TOKEN_SECRET;

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
  const { email, password } = req.body; // fetching email and password
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  // checking if user is already available
  const user = await User.findOne({ email });
  // compare password with hashed password

  if (user && (await bcrypt.compare(password, user.password))) {
    // the payload we are giving to the JWT
    const accessToken = jwt.sign(
      {
        user: {
          userName: user.userName,
          email: user.email,
          _id: user._id,
        },
      },
      secretToken,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});
module.exports = { registerUser, loginUser, currentUser };
