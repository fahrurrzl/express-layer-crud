import prisma from "../db/index.js";

const findProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

const createProduct = async (productData) => {
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });

  return product;
};

const editProduct = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });

  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

export {
  findProducts,
  findProductById,
  editProduct,
  deleteProduct,
  createProduct,
};
