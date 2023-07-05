import React, { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from "react";

// context and type created
type ThemeType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext<ThemeType>({ theme: false, setTheme: () => undefined });

// react function context
export function ThemeContextProvider(props: React.PropsWithChildren) {
  const [theme, setTheme] = useState<boolean>(false);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
}

// use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};
