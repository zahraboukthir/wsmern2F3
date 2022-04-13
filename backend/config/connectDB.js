const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("Db connect");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
