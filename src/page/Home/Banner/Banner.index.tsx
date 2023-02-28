import React from 'react'
import { styled } from '@mui/system';
import Heading from '../../../component/Heading/Heading';
import SearchBar from '../../../component/SearchBar/SearchBar.index';
import Title from '../../../component/Title/Title';

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection:"column",
  gap:"1.06rem",
  justifyContent: "center",
  backgroundImage: `url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80')`,
  height:"27rem",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat", 
  backgroundSize: "cover", 
});


const BannerIndex = () => {



  return (
    <Wrapper>
      <Heading heading="Download High Quality Images By Creators" />
      <Title heading="Over 2.4 million stock images by our talented community" />
        <SearchBar
          placeholder="Search high resolution images, categories, wallpapers"
          width={{ width: " 50.5rem" }}
          onSearch={(_: string) => {}}
          searchValue=""
          style={{
            width: "50.5rem",
            borderRadius: "8px",
            height: "54px",
            marginLeft: "4rem",
          }}
        />
    </Wrapper>
  );
}

export default BannerIndex
