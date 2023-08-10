const BlogPost = require("../model/BlogPost");
const User = require("../model/User");

// Create a new blog post with comments
const BlogPostController = async (req, res) => {
  const { title, content, authorId, comments } = req.body;
  try {
    const author = await User.findById(authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    const newPost = new BlogPost({
      title,
      content,
      authorId: author._id,
      comments,
    });

    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { BlogPostController };
