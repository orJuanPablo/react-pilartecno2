const BASEURL = process.env.REACT_APP_FAKE_STORE_API;
const productsUrl = `${BASEURL}/products`;

const routes = {
  getAllProducts: () => productsUrl,
  getAllCategories: () => `${productsUrl}/categories`,
  getProductsById: (idProducto) => `${productsUrl}/${idProducto}`,
  newProduct: () => productsUrl,
};
export default routes;
