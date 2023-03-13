import React from 'react'
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Navigate } from 'react-router-dom';
import { fontSmallDark } from '../../styles/font';

const NavLinksWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  width:"13rem",
  justifyContent: "space-between"
});

const links=[
          { key:1,title: "Explore", to: "" },
          { key:2,title: "Collection", to: "" },
          { key:3,title: "Community", to: "" },
        ]

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {links?.map((link: any) => {
        return (
          <Typography
            sx={fontSmallDark}
            onClick={() => <Navigate to={link.to || ""} />}
            key={link.key}
          >
            {link?.title}
          </Typography>
        );
      })}
    </NavLinksWrapper>
  );
}

export default NavLinks
