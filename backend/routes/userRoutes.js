const express = require("express");
const {
  register,
  login,
  getAuthUser,
  getallusers,
} = require("../controllers/Authcontrollers");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middlewares/bodyvalidators");
const isAdmin = require("../middlewares/isAdmin");
const isAuthpassport = require("../middlewares/isAuthpassport");
const router = express.Router();

/**
 * @param POST /user/register
 * @description register user
 * @access PUBLIC
 */
router.post("/register", registerRules(), validator, register);
/**
 * @param POST /user/login
 * @description register user
 * @access PUBLIC
 */
router.post("/login", loginRules(), validator, login);
/**
 * @param get /user/current
 * @description get auth user
 * @access PRIVATE
 */
router.get("/current", isAuthpassport(), getAuthUser);
//for jwt
// router.get("/me", isAuth, getAuthUser);
/**
 * @param get /user/all
 * @description get all useres
 * @access PRIVATE ,Authorizd to Admin
 */
router.get("/all", isAuthpassport(), isAdmin, getallusers);
module.exports = router;
