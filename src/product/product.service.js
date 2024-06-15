import {
  createProduct,
  deleteProduct,
  editProduct,
  findProductById,
  findProducts,
} from "./product.repository.js";

const getProducts = async () => {
  const products = await findProducts();

  if (!products) {
    throw new Error("products not found");
  }

  return products;
};

const getProductById = async (id) => {
  if (typeof id !== "number") {
    throw new Error("ID not a number");
  }

  const product = await findProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const postProduct = async (productData) => {
  const product = await createProduct(productData);

  return product;
};

const editProductById = async (id, productData) => {
  await getProductById(id);

  const product = await editProduct(id, productData);

  return product;
};

const deleteProductById = async (id) => {
  await getProductById(id);

  await deleteProduct(id);
};

export {
  getProducts,
  getProductById,
  editProductById,
  deleteProductById,
  postProduct,
};
