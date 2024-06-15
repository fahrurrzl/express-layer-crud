import express from "express";
import prisma from "../db/index.js";
import {
  deleteCategoryById,
  editCategoryById,
  getCategories,
  getCategoryById,
  postCategory,
} from "./category.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await getCategories();

    res.send(categories);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const categoryId = parseInt(req.params.id);

  try {
    const category = await getCategoryById(categoryId);

    res.send(category);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const categoryData = req.body;

  try {
    const category = await postCategory(categoryData);

    res.send({
      data: category,
      message: "category create success",
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryData = req.body;

  if (!categoryData.name) {
    res.send("some field missing");
  }

  try {
    const category = await editCategoryById(categoryId, categoryData);

    res.send({
      data: category,
      message: "category update success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryData = req.body;

  try {
    const category = await editCategoryById(categoryId, categoryData);

    res.send({
      data: category,
      message: "category update success",
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const categoryId = parseInt(req.params.id);

  try {
    await deleteCategoryById(categoryId);

    res.send("category delete success");
  } catch (err) {
    res.send(err.message);
  }
});

export default router;
