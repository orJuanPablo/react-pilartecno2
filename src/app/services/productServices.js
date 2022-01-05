import api from "../../client/api";
import routes from "../../routes/fakeStoreApiRoutes";

export const getAllProducts = async () => {
  return api.get(routes.getAllProducts());
};
export const getProductById = async (productId) => {
  return api.get(routes.getProductsById(productId));
};
export const addNewProduct = async (product) => {
  return api.post(routes.newProduct(), product);
};
export const getAllCategories = async () => {
  return api.get(routes.getAllCategories());
};
