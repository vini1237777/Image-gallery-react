import React from 'react'
import { styled } from '@mui/system';
import Switcher from '../DarkModeSwitcher/DarkModeSwitcher';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import SearchBar from '../SearchBar/SearchBar.index';


const Wrapper = styled("div")({
  height: "6rem",
  paddingLeft:"9.3rem",
  paddingRight:"9.3rem",
  display:"flex",
  alignItems:"center",
});

const TopBar = React.forwardRef(({search,setSearch}:{search:string,setSearch:any},ref) => {
  return (
    <Wrapper>
      <Logo />
      <SearchBar ref={ref} placeholder="Search Images here" searchValue={search} onSearch={setSearch}  style={{ width:" 26.1rem",paddingLeft: "4rem",paddingRight: "1.68rem",height: "2.6rem"}} />
      <NavLinks />
      <Switcher />
    </Wrapper>
  );
})

export default TopBar
