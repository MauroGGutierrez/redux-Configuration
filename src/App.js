import { useDispatch, useSelector } from "react-redux";
import { setOffDarkMode, setOnDarkMode } from "./redux/actions/themeActions";

function App() {
  const { darkMode } = useSelector((state) => state.darkMode); // lo que va despues del punto de state sera el nombre de la const
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        {darkMode === true
          ? "DarkMode ON"
          : darkMode === false
          ? "darkMode OFF"
          : "No Seteado"}
      </h1>
      <button onClick={() => dispatch(setOnDarkMode())}>
        Habilitar DarkMode
      </button>
      <button onClick={() => dispatch(setOffDarkMode())}>
        deshabilitar DarkMode
      </button>
    </>
  );
}

export default App;
