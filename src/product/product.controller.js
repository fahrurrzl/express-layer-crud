import express from "express";
import {
  deleteProductById,
  editProductById,
  getProductById,
  getProducts,
  postProduct,
} from "./product.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getProducts();

    res.send(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);

  try {
    const product = await getProductById(productId);
    res.send(product);
  } catch (err) {
    res.status(400).res(err.message);
  }
});

router.post("/", async (req, res) => {
  const productData = req.body;

  try {
    const product = await postProduct(productData);

    res.status(200).send({
      data: product,
      message: "product create success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  if (
    !(
      productData.name &&
      productData.price &&
      productData.description &&
      productData.image
    )
  ) {
    return res.status(400).send("some field missing");
  }

  try {
    const product = await editProductById(productId, productData);

    res.status(200).send({
      data: product,
      message: "edit product success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  try {
    const product = await editProductById(productId, productData);

    res.status(200).send({
      data: product,
      message: "edit product success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);

  try {
    await deleteProductById(productId);

    res.status(200).send("product delete success");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router;
