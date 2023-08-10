const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: {
    type: "string",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const blogPost = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [commentSchema],
});

const BlogPostModel = mongoose.model("BlogPost", blogPost);

module.exports = BlogPostModel;
