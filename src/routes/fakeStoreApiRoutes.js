const BASEURL = process.env.REACT_APP_FAKE_STORE_API;
const productsUrl = `${BASEURL}/products`;

const routes = {
  getAllProducts: () => productsUrl,
  getAllCategories: () => `${productsUrl}/categories`,
  getProductsByCategories: (category)=>`${productsUrl}/category/${category}`,
  getProductsById: (idProducto) => `${productsUrl}/${idProducto}`,
  newProduct: () => productsUrl,
};
export default routes;
