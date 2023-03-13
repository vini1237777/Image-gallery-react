import  { useContext } from 'react'
import { ThemeContext } from './ThemeProvider';

const useThemeConsumer = () => {
    const theme = useContext(ThemeContext);
  return {theme:theme.theme,toggleTheme: theme.toggleTheme}
}

export default useThemeConsumer
