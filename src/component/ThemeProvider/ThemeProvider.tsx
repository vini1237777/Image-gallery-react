import React, { createContext} from 'react'
import useThemeProvider from './useThemeProvider';


export enum themeEnum{
    dark="dark",
    light="light"
}
export const ThemeContext = createContext<any>({toggleTeme:()=>{},theme:themeEnum.light});

export type themetype=themeEnum.dark | themeEnum.light;

const ThemeProvider = ({children}:{children:JSX.Element}) => {

const {theme, toggleTheme} = useThemeProvider();

  return (
    <ThemeContext.Provider value={{ toggleTheme: toggleTheme, theme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
