import prisma from "../db/index.js";

const findCategories = async () => {
  const categories = prisma.category.findMany();

  return categories;
};

const findCategoryById = async (id) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return category;
};

const createCategory = async (categoryData) => {
  const category = prisma.category.create({
    data: {
      name: categoryData.name,
    },
  });

  return category;
};

const editCategory = async (id, categoryData) => {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: categoryData.name,
    },
  });

  return category;
};

const deleteCategory = async (id) => {
  await prisma.category.delete({
    where: {
      id,
    },
  });
};

export {
  findCategories,
  findCategoryById,
  createCategory,
  editCategory,
  deleteCategory,
};
