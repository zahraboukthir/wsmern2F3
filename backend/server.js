const express = require("express");
const app = express();
require("dotenv").config();
app.use("/uploads", express.static(__dirname + "/uploads"));
const connectDB = require("./config/connectDB");
connectDB();
// const passport = require("passport");
app.use(express.json());
// app.use(passport.initialize());
app.use("/user", require("./routes/userRoutes"));
app.use("/product", require("./routes/productRoutes"));
app.listen(process.env.port, () =>
  console.log(`server is listening on port ${process.env.port}!`)
);
