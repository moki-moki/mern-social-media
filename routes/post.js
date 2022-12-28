const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getPost,
  getAllPosts,
  dislikePost,
  getAllUsersPost,
  commentPost,
  deleteComment,
} = require("../controller/post");

// GET ALL POSTS
router.get("/", getAllPosts);

// DELTE POST
router.delete("/:id", deletePost);

// UPDATE POST
router.put("/:id", updatePost);

// GET A SINGLE POST
router.get("/:id", getPost);

// CREATE A POST
router.post("/create", createPost);

// LIKE-DISLIKE POST
router.put("/:id/like", likeDislikePost);
router.put("/:id/dislike", dislikePost);

// GET ALL USERS POSTS
router.get("/profile/:username/:id", getAllUsersPost);

// post comment
router.post("/comment/:postId", commentPost);

// delete comment
router.delete("/delete/:postId/:commentId", deleteComment);

module.exports = router;
