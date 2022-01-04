import json from "../../example/MOCK_DATA.json";
import db from "../db/db";
export const getProductById = (id) => {
  const productFromDB = json.products.find((element) => element.id == id);
  return productFromDB;
};

export const getAllCartProducts = async () => {
  const productDB = await db.cart.toArray();
  return productDB;
};

export const deleteProduct = async (pk) => {
  await db.cart.where('id').equals(pk).delete();
};
