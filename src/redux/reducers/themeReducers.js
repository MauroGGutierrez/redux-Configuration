import actionsTypes from "../actions/actionsTypes";

export const darkModeReducer = (state = { darkMode: null }, action) => {
  switch (action.type) {
    case actionsTypes.ON_DARK_MODE:
      return { darkMode: true };
    case actionsTypes.OFF_DARK_MODE:
      return { darkMode: false };
    default:
      return state;
  }
  //nunca ponert fetch, calculos complejos, nada porque esta es una funcion pura -> es algo que hace solo una cosa, una sola tarea
};
