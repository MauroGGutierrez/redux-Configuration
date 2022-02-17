import actionsTypes from "./actionsTypes";

export const setOnDarkMode = () => {
  return (dispatch) => {
    //dispatch es una funcion que ya viene incluido no hay q exportar
    dispatch({ type: actionsTypes.ON_DARK_MODE }); // es igual a un string que diga 'ON_DARK_MODE'
  };
};

export const setOffDarkMode = () => {
  return (dispatch) => {
    dispatch({ type: actionsTypes.OFF_DARK_MODE });
  };
};
