
import React, { useState } from "react";
import { Avatar, ImageList, ImageListItem } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { fontSmallDark, fontSmallGray, fontxl2 } from "../../../styles/font";
import { ThumbUpOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import Heading from "../../../component/Heading/Heading";
import Tags from "../../../component/Tags/Tags";
import Modal from "../../../component/Modal/Modal";
import useThemeConsumer from "../../../component/ThemeProvider/useThemeConsumer";
import { themeEnum } from "../../../component/ThemeProvider/ThemeProvider";

const FlexRowWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FlexColWrapper = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
});

const ImageGallery = ({
  data,
  loading,
  page,
  setPage,
  hasMore,
  search,
  tags
}: {
  data: any[];
  loading: boolean;
  page: number;
  setPage: any;
  hasMore: boolean;
  search:string;
  tags:string[]
}) => {
  
  const { theme } = useThemeConsumer();


  const [show,setShow]=useState<boolean>(false);
  const [modalData,setModalData]=useState<any>();


  return <>
    {search === undefined ? (
    <div style={{ width: "auto", minHeight: "100vh", marginTop: "4rem" }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={22}
        sx={{ paddingLeft: "9.3rem", paddingRight: "9.3rem" }}
      >
        {data &&
          data?.map((item, index) => {
            return (
              <div key={item.id}>
                <ImageListItem>
                  <div
                    onClick={() => {
                      setShow(true);
                      setModalData(item);
                    }}
                  >
                    <img
                      src={item.urls.small_s3}
                      alt={item?.alt_description}
                      loading={"lazy"}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <FlexRowWrapper
                    style={
                      theme === themeEnum.light
                        ? {
                            height: "4rem",
                            display: "flex",
                            gap: "0.6rem",
                            paddingTop: "0.78rem",
                            paddingBottom: "0.78rem",
                            paddingLeft: "2px",
                            border: "1px solid #E5E5E5",
                            borderRadius: "0px 0px 8px 8px",
                          }
                        : {
                            height: "4rem",
                            display: "flex",
                            gap: "0.6rem",
                            paddingTop: "0.78rem",
                            paddingBottom: "0.78rem",
                            paddingLeft: "2px",
                            border: "1px solid #141414",
                            borderRadius: "0px 0px 8px 8px",
                            backgroundColor: "#141414",
                          }
                    }
                  >
                    <Avatar
                      src={item.user.profile_image.small}
                      style={{
                        height: "2.43rem",
                      }}
                    />
                    <FlexColWrapper
                      style={{ paddingRight: "6.7rem", paddingLeft: "10px" }}
                    >
                      <div style={fontSmallDark}>
                        {item.user.first_name + " " + item.user.last_name}
                      </div>
                      <div style={fontSmallGray}>
                        {item?.user?.instagram_username &&
                          ` @${item?.user?.instagram_username}`}
                      </div>
                    </FlexColWrapper>
                    <FlexRowWrapper style={{ gap: "3.4px", ...fontSmallDark }}>
                      <ThumbUpOutlined /> {item.user.total_likes}
                    </FlexRowWrapper>
                  </FlexRowWrapper>
                </ImageListItem>
              </div>
            );
          })}
      </ImageList>
    </div>
    ) : (
    <div style={{ width: "auto", minHeight: "100vh", marginTop: "4rem" }}>
      <Heading
        heading={search}
        style={{
          ...fontxl2,
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "9.37rem",
          marginTop: "4.4rem",
        }}
      />
      <Tags names={tags} />
      <InfiniteScroll
        next={() => {
          setPage((prevPage: number) => prevPage + 1);
        }}
        dataLength={data?.length}
        hasMore={hasMore}
        loader={<></>}
      >
        <ImageList
          variant="masonry"
          cols={3}
          gap={22}
          sx={{ paddingLeft: "9.3rem", paddingRight: "9.3rem" }}
        >
          {data &&
            data?.map((item, index) => {
              return (
                <div key={item.id}>
                  <ImageListItem >
                    <img
                      src={item.urls.small}
                      alt={item?.alt_description}
                      loading={"lazy"}
                      style={{ objectFit: "cover" }}
                      onClick={() => {
                        setShow(true);
                        setModalData(item);
                      }}
                    />
                    <FlexRowWrapper
                      style={
                        theme === themeEnum.light
                          ? {
                              height: "4rem",
                              display: "flex",
                              gap: "0.6rem",
                              paddingTop: "0.78rem",
                              paddingBottom: "0.78rem",
                              paddingLeft: "2px",
                              border: "1px solid #E5E5E5",
                              borderRadius: "0px 0px 8px 8px",
                            }
                          : {
                              height: "4rem",
                              display: "flex",
                              gap: "0.6rem",
                              paddingTop: "0.78rem",
                              paddingBottom: "0.78rem",
                              paddingLeft: "2px",
                              border: "1px solid #141414",
                              borderRadius: "0px 0px 8px 8px",
                              backgroundColor: "#141414",
                            }
                      }
                    >
                      <Avatar
                        src={item.user.profile_image.small}
                        style={{
                          height: "2.43rem",
                        }}
                      />
                      <FlexColWrapper
                        style={{ paddingRight: "6.7rem", paddingLeft: "10px" }}
                      >
                        <div style={fontSmallDark}>
                          {item.user.first_name + " " + item.user.last_name}
                        </div>
                        <div style={fontSmallGray}>
                          {item?.user?.instagram_username &&` @${item?.user?.instagram_username}`}
                        </div>
                      </FlexColWrapper>
                      <FlexRowWrapper
                        style={{ gap: "3.4px", ...fontSmallDark }}
                      >
                        <ThumbUpOutlined /> {item.user.total_likes}
                      </FlexRowWrapper>
                    </FlexRowWrapper>
                  </ImageListItem>
                </div>
              );
            })}
        </ImageList>
      </InfiniteScroll>
    </div>
    )};
    <Modal show={show} setShow={setShow} data={modalData} tags={tags}/>
  </>;
};

export default ImageGallery;
