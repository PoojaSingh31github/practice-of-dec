const express = require("express");
const {getallproduct, addproduct}=require("../controlers/pro_con");
const router = express.Router();

router.get("/getall", getallproduct)
router.post("/add", addproduct)

module.exports = router;
