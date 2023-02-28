import React from 'react'
import { Tab, Tabs } from '@mui/material';
import useThemeConsumer from '../ThemeProvider/useThemeConsumer';
import { themeEnum } from '../ThemeProvider/ThemeProvider';

interface ITags{
names:string[];
sx?:any
}

const Tags = ({names,sx}:ITags) => {
  const { theme } = useThemeConsumer();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        style={{
          width: "70rem",
          marginRight: "1rem",
          marginTop: "1.5rem",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
       sx={sx}
      //  value={names.length && ''}
      >
        {names?.map((name: string,index:number) => {
          return (
            <Tab
              label={name}
              value={index}
              style={
                theme === themeEnum.light
                  ? {
                      borderRadius: "0.25rem",
                      border: "1px solid #C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                      backgroundColor: "lightestgrey",
                      width: "1.6rem",
                      height: "1.75rem",
                      textOverflow: "ellipsis",
                    }
                  : {
                      borderRadius: "0.25rem",
                      border: "1px solid #C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                      color: "#C4C4C4",
                      width: "1.6rem",
                      height: "1.75rem",
                      textOverflow: "ellipsis",
                    }
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}

export default Tags

