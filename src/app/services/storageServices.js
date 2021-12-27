
export const saveLastInterestProduct = (product) => {
  //?API local storage / SessionStorage
  localStorage.setItem("lastProduct", product);
};
