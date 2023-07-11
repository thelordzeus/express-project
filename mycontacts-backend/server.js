const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const contactRoute = require("./routes/contactRoutes");
const userRoute = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");

connectDB();

app.use(express.json()); // used to pass json payload to req.body
app.use("/api/contacts", contactRoute);
app.use("/api/users", userRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
