import {
  createCategory,
  deleteCategory,
  editCategory,
  findCategories,
  findCategoryById,
} from "./category.repository.js";

const getCategories = async () => {
  const categories = await findCategories();

  return categories;
};

const getCategoryById = async (id) => {
  if (typeof id !== "number") {
    res.send("ID not a number");
  }

  const category = await findCategoryById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};

const postCategory = async (categoryData) => {
  const category = await createCategory(categoryData);

  return category;
};

const editCategoryById = async (id, categoryData) => {
  await getCategoryById(id);

  const category = await editCategory(id, categoryData);

  return category;
};

const deleteCategoryById = async (id) => {
  await getCategoryById(id);

  await deleteCategory(id);
};

export {
  getCategories,
  getCategoryById,
  postCategory,
  editCategoryById,
  deleteCategoryById,
};
