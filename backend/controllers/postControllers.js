const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author category').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add other CRUD controllers like getPostById, createPost, updatePost, deletePost...
