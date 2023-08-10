const express = require("express");
const { BlogPostController } = require("../controllers/blogController");

const router = express.Router();

router.post("/createBlog", BlogPostController);

module.exports = router;
