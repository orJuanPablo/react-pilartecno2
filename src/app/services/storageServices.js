
export const saveLastInterestProduct = (product) => {
  //? API localstorage persiste a la sesion / SessionStorage acaba junto con la sesion
  sessionStorage.setItem("lastProduct", product);
};
