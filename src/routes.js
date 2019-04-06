import express from "express";
import Post from "./models/post";
import Ad from "./models/ad";
import Category from "./models/category";

const router = express.Router();

router.get("/post", async (req, res) => {
  const { page, ord } = req.query;
  const list = await Post.find()
    .sort({ _id: ord === "asc" ? 1 : -1 })
    .skip((page - 1) * 10)
    .limit(10);
  res.json({
    list
  });
});

router.get("/post/:no", async (req, res) => {
  const { no } = req.params;
  const post = await Post.findOne({ no });
  res.json({
    detail: {
      article: post,
      replies: post.replies
    }
  });
});

router.get("/category", async (req, res) => {
  const list = await Category.find();
  res.json({
    list
  });
});

router.get("/ad", async (req, res) => {
  const list = await Ad.find();
  res.json({
    list
  });
});

export default router;
