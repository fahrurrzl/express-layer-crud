import express from "express";
import dotenv from "dotenv";
import categoryController from "./category/category.controller.js";
import productController from "./product/product.controller.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/categories", categoryController);
app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Server running in port: " + PORT);
});
