import React from 'react'
import { styled } from '@mui/system';
import { colors } from '../../styles/colors';
import { fontFamily,fontxl } from '../../styles/font';
import { themeEnum } from '../ThemeProvider/ThemeProvider';
import useThemeConsumer from '../ThemeProvider/useThemeConsumer';

interface IHeading {
  heading:string;
  style?:any
}


const HeadingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...fontxl,
  color: colors.white,
  fontFamily: fontFamily.montserrat,
  marginTop: "3.71rem",
});

const Heading = ({heading,style}:IHeading) => {
  const { theme } = useThemeConsumer();

  return (
    <HeadingWrapper style={theme===themeEnum.light? style: {...style,color:'white'}}>
      {heading}
    </HeadingWrapper>
  );
}

export default Heading;
