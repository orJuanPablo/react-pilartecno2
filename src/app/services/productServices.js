import json from "../../example/MOCK_DATA.json";
export const getProductById = (id) => {
  const productFromDB = json.products.find((element) => (element.id == id));
  return productFromDB;
};
