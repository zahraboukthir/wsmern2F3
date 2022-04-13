const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  //   const { fullName, email, password, role } = req.body;
  const { email, password } = req.body;
  console.log(password);
  try {
    //1- check if the user already exits
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exist please login" });
    }
    //2- create new  user
    //    user = new User({fullName, email, password, role });
    const newUser = new User({ ...req.body });
    // console.log(newUser);
    //3- hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    // 4- save the user
    await newUser.save();
    //5- RESPONSE
    res.send({ user: newUser, msg: "user successfully registered" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //1- check if the user exists
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credentials!" });
    }

    //2- compare the password
    const matched = await bcrypt.compare(password, existUser.password);
    if (!matched) {
      return res.status(400).send({ msg: "bad credentials" });
    }

    //3-sign in the user ( token )

    const payload = { _id: existUser._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    //for passport :
    // const token = "Bearer " + jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    res.send({ user: existUser, token: token });
  } catch (error) {
    console.log(error);
  }
};
const getAuthUser = async (req, res) => {
  try {
    // console.log(req.user);
    res.send({ user: req.user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
const getallusers = async (req, res) => {
  const allUsers = await User.find();
  res.send({ allUsers });
};
module.exports = { register, login, getAuthUser, getallusers };
