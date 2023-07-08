const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const route = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json()); // used to pass json payload to req.body
app.use("/api/contacts", route);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
