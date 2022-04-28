const express = require("express");
const app = express();
const cors=require('cors')
require("dotenv").config();
// the millware static for the uploads of photos in thier folders
app.use("/uploads", express.static(__dirname + "/uploads"));
/**
 * connection BD
 */
const connectDB = require("./config/connectDB");
connectDB();
/**
 * pars the body using passport  
 */
// const passport = require("passport");
// app.use(passport.initialize());
/**
 * pars the body using middeleware express.json() 
 */
app.use(express.json());
/**
 * use cors in the server to
 * suitch the base of front and back
 *  http://localhost:port-of-frontend-server -->http://localhost:port-of-backtend-server
 * 
 *  or  use proxy in the front in package.json add : "proxy":"http://localhost:port-of-backtend-server"
 */
app.use(cors())
/**
 * the routes
 */
app.use("/user", require("./routes/userRoutes"));
app.use("/product", require("./routes/productRoutes"));
app.listen(process.env.port, () =>
  console.log(`server is listening on port ${process.env.port}!`)
);
