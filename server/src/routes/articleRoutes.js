import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

//GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

//GET single article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(404).json({ error: "Article not found" });
  }
});

//CREATE new article
router.post("/", async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: "Failed to create article" });
  }
});

//UPDATE article
router.put("/:id", async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update article" });
  }
});

//DELETE article
router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete article" });
  }
});

export default router;