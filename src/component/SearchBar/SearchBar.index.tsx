import React, { useRef } from "react";
import {
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useThemeConsumer from "../ThemeProvider/useThemeConsumer";
import { themeEnum } from "../ThemeProvider/ThemeProvider";

interface ISearchBar {
  placeholder: string;
  width?: { width: string };
  searchValue: string;
  onSearch: any;
  style:any;
  
}


const SearchBar = React.forwardRef(({
  placeholder,
  searchValue,
  onSearch,
  style,

}: ISearchBar,ref) => {

  const { theme } = useThemeConsumer();
  

    return (
      <div style={style}>
        <Paper
          component="form"
          sx={
            theme === themeEnum.light
              ? {
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ECECEC",
                }
              : {
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#4F4F4F",
                }
          }
        >
          <IconButton
            type="button"
            sx={
              theme === themeEnum.light
                ? { p: "10px", backgroundColor: "#ECECEC" }
                : { p: "10px", backgroundColor: "#4F4F4F" }
            }
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            inputRef={ref}
            sx={
              theme === themeEnum.light
                ? { ml: 1, flex: 1, backgroundColor: "#ECECEC" }
                : {
                    ml: 1,
                    flex: 1,
                    backgroundColor: "#4F4F4F",
                    color: "#8D8D8D",
                  }
            }
            placeholder={placeholder}
            inputProps={{ "aria-label": placeholder }}
            onChange={(e) => onSearch(e.target.value)}
            value={searchValue}
            onKeyPress={(e: any) => {
              console.log(e.keyCode, "code");
              if (e.keyCode === 13) {
                return false;
              }
            }}
          />
        </Paper>
      </div>
    );
});

export default SearchBar;
