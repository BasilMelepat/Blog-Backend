var express = require("express");
const { doBlog, allBlog } = require("../controller/Blog");
const verifyUser = require("../middleWare/Auth");
const imageController = require("../controller/imageController");
var router = express.Router();
const multer = require("multer");
const createdBlog = require("../Model/blogModel");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/BlogCreated", verifyUser, doBlog);
router.post("/addImage",  upload.single("img"), imageController);
router.get("/createdBlog", verifyUser, allBlog);


module.exports = router;
