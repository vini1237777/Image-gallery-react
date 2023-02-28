
import React from 'react';
import { styled } from "@mui/system";
import { fontSmallDark } from "../../styles/font";
import { Switch } from "@mui/material";
import useThemeConsumer from "../ThemeProvider/useThemeConsumer";
import { themeEnum } from "../ThemeProvider/ThemeProvider";

const Typography = styled("p")({
  ...fontSmallDark,
});


export default function Switcher() {
  

 const {theme,toggleTheme}= useThemeConsumer()
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        paddingLeft: "5.5rem",
      }}
    >
      <Typography>
        {theme === themeEnum.light ? "Dark Mode" : "Light Mode"}
      </Typography>
      <Switch onChange={toggleTheme} checked={theme === themeEnum.dark ? true :false} />
    </div>
  );
}
