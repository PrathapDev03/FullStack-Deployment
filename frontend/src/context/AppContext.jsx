import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AppContext =
  createContext();

export function AppProvider({
  children
}) {

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem(
        "employeepro-theme"
      );

    if (
      savedTheme === "dark"
    ) {

      setDarkMode(true);

      document.body.classList.add(
        "dark-theme"
      );

    }

  }, []);

  const toggleTheme = () => {

    const nextMode =
      !darkMode;

    setDarkMode(
      nextMode
    );

    if (nextMode) {

      document.body.classList.add(
        "dark-theme"
      );

      localStorage.setItem(
        "employeepro-theme",
        "dark"
      );

    } else {

      document.body.classList.remove(
        "dark-theme"
      );

      localStorage.setItem(
        "employeepro-theme",
        "light"
      );

    }

  };

  return (

    <AppContext.Provider

      value={{

        darkMode,

        toggleTheme

      }}

    >

      {children}

    </AppContext.Provider>

  );

}

export const useApp = () =>
  useContext(AppContext);