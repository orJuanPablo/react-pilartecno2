const initialState = {
  saludo: "Hola Pilar Tecno Mern Stack",
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAMBIAR_SALUDO":
      return { ...state, saludo: "Saludo Modificado" };
    default:
      return state;
  }
};
