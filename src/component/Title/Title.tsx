import React from 'react'
import { styled } from '@mui/system';
import { colors } from '../../styles/colors';
import { fontFamily, fontMedium } from '../../styles/font';

interface IHeading {
  heading:string;
}


const TitleWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ...fontMedium,
  color: colors.gray,
  fontFamily: fontFamily.montserrat,
});

const Title = ({heading}:IHeading) => {
  return (
    <TitleWrapper>
      {heading}
    </TitleWrapper>
  );
}

export default Title;
