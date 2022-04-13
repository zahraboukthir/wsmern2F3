const express = require("express");
const { addproduct } = require("../controllers/productcontrollers");
const isAdmin = require("../middlewares/isAdmin");
const isAuthpassport = require("../middlewares/isAuthpassport");
const router = express.Router();
const upload = require("../utils/multer");
/**
 * @param POST /product/addProduct
 * @description add Product
 * @access PRIVATE ,Authorizd to Admin
 */
//addNewProduct
router.post(
  "/addProduct",
  isAuthpassport(),
  isAdmin,
  upload("products").single("file"),
  addproduct
);
module.exports = router;
