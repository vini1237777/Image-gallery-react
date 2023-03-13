import  { useEffect, useState } from 'react'
import { themeEnum } from './ThemeProvider';


const useThemeProvider = () => {

  const [theme, setTheme] = useState<string>(themeEnum.light);

  useEffect(()=>{
  const themeFromLocalStorage = localStorage.getItem("theme");

  if (themeFromLocalStorage===themeEnum.light || themeFromLocalStorage===themeEnum.dark){
   setTheme(themeFromLocalStorage)
  } else {
    setTheme(themeEnum.light);
    localStorage.setItem("theme",themeEnum.light)
  }

  },[])

  const onThemeChange =()=>{
    const newTheme = theme ===themeEnum.light ? themeEnum.dark : themeEnum.light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return { theme, toggleTheme:onThemeChange };
}

export default useThemeProvider;
