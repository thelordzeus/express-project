const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(connectionString);
    console.log(
      "MongoDB Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
