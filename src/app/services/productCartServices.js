import db from "../db/db";
export const addProduct = ({ product }) => {
  const { title, price, category } = product;
  db.cart.add({
    title,
    price,
    category,
  });
};
export const getAllCartProducts = async () => {
  const productDB = await db.cart.toArray();
  return productDB;
};

export const deleteProduct = async (pk) => {
  await db.cart.where("id").equals(pk).delete();
};
