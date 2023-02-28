import * as React from "react";
import { Avatar, Box, Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { fontSmallDark, fontSmallGray } from "../../styles/font";
import { Close, DownloadSharp, Info, Instagram, Share, ThumbUpAltOutlined, Twitter } from "@mui/icons-material";
import Tags from "../Tags/Tags";
import useThemeConsumer from "../ThemeProvider/useThemeConsumer";
import { themeEnum } from "../ThemeProvider/ThemeProvider";
import classes from './modal.module.css'

interface IModal{
show: boolean;
setShow:any;
data:any;
tags:any
}



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

export default function Modal({show,setShow,data,tags}:IModal) {
  const { theme } = useThemeConsumer();
    const tagsReduced=tags.slice(0,11)
   console.log(tagsReduced,'TR')
  return (
    <Dialog
      open={show}
      onClose={() => setShow(false)}
      BackdropProps={{
        classes: {
          root: classes.backdrop,
        },
      }}
      fullScreen={true}
      sx={
        theme === themeEnum.light
          ? {
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "55rem",
                  height: "100%",
                  maxHeight: "42rem",
                  marginTop: "1rem",
                  marginLeft: "6rem",
                  overflowX: "hidden",
                  overflowY: "auto",
                },
              },
            }
          : {
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "55rem",
                  height: "100%",
                  maxHeight: "42rem",
                  marginTop: "2.8rem",
                  marginLeft: "6rem",
                  overflowX: "hidden",
                  overflowY: "auto",
                  backgroundColor: "#232323",
                },
              },
            }
      }
    >
      <FlexColWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1.06rem",
            justifyContent: "flex-end",
            backgroundImage: `url(${data?.urls.small})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "28rem",
            objectFit: "fill",
          }}
        >
          <FlexRowWrapper style={{ gap: "29rem" }}>
            <FlexRowWrapper
              style={{ gap: "1rem", marginLeft: "1rem", marginBottom: "1rem" }}
            >
              <Button
                variant={"outlined"}
                style={{ color: "white", borderColor: "white" }}
                size={"small"}
              >
                <Share /> share
              </Button>
              <Button
                variant={"outlined"}
                style={{ color: "white", borderColor: "white" }}
                size={"small"}
              >
                <Info />
                info
              </Button>
            </FlexRowWrapper>
            <FlexRowWrapper
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#3CB46E" }}
              >
                Dowanload Image
              </Button>
            </FlexRowWrapper>
          </FlexRowWrapper>
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
                  marginTop: "1.6rem",
                  marginLeft: "1.56rem",
                }
              : {
                  height: "4rem",
                  display: "flex",
                  gap: "0.6rem",
                  paddingTop: "0.78rem",
                  paddingBottom: "0.78rem",
                  paddingLeft: "2px",
                  marginTop: "1.6rem",
                  marginLeft: "1.56rem",
                  color: "#E5E5E5",
                }
          }
        >
          <Avatar
            src={data?.user.profile_image.small}
            style={{
              height: "3.5rem",
              width: "3.5rem",
            }}
          />
          <FlexColWrapper
            style={{
              marginLeft: "10px",
              marginRight: "2.45rem",
            }}
          >
            <div style={fontSmallDark}>
              {data?.user?.first_name + " " + data?.user?.last_name || ""}
            </div>
            {data?.user?.instagram_username && (
              <div style={fontSmallGray}>@{data?.user?.instagram_username}</div>
            )}
          </FlexColWrapper>
          <FlexRowWrapper
            style={
              data?.user.social.twitter_username !== undefined &&
              data?.user.social.instagram_username !== undefined
                ? {
                    gap: "22rem",
                  }
                : {
                    gap: "16rem",
                  }
            }
            sx={
              {gap:"18rem"}
            }
          >
            <FlexRowWrapper style={{ gap: "0.78rem" }}>
              <FlexRowWrapper style={{ gap: "0.1rem" }}>
                <Instagram />
                <div style={{ ...fontSmallGray }}>
                  /{data?.user?.social?.instagram_username}
                </div>
              </FlexRowWrapper>
              {data?.user.social.twitter_username && (
                <FlexRowWrapper>
                  <Twitter />
                  <div style={{ ...fontSmallGray }}>
                    /{data?.user?.social?.twitter_username}
                  </div>
                </FlexRowWrapper>
              )}
            </FlexRowWrapper>
            <FlexRowWrapper style={{ gap: "1rem" }}>
              <FlexRowWrapper style={{ gap: "1.25rem" }}>
                <FlexRowWrapper
                  style={{
                    gap: "0.2rem",
                    ...fontSmallDark,
                  }}
                >
                  <div>{data?.user.total_downloads || 0}</div>
                  <div> downloads</div>
                </FlexRowWrapper>
              </FlexRowWrapper>
              <FlexRowWrapper style={{ gap: "0.3rem", ...fontSmallDark }}>
                <ThumbUpAltOutlined />
                <div>{data?.user.total_likes || 0}</div>
              </FlexRowWrapper>
            </FlexRowWrapper>
          </FlexRowWrapper>
        </FlexRowWrapper>
      </FlexColWrapper>
      <FlexColWrapper
        style={{
          gap: "1px",
          marginLeft: "1.56rem",
          marginTop: "2rem",
          marginRight: "2.6rem",
        }}
      >
        <div
          style={
            theme === themeEnum.light
              ? { ...fontSmallDark, color: "black" }
              : { ...fontSmallDark, color: "white" }
          }
        >
          Related tags
        </div>
        {tagsReduced.length > 0 ? (
          <Tags
            names={tagsReduced}
            sx={
              theme === themeEnum.light
                ? {
                    "& .MuiTabs-flexContainer": {
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                      width: "49rem",
                      color: "gray",
                    },
                  }
                : {
                    "& .MuiTabs-flexContainer": {
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                      width: "49rem",
                      color: "gray",
                      backgroundColor: "#232323",
                    },
                  }
            }
          />
        ) : (
          <div
            style={
              theme === themeEnum.light
                ? { ...fontSmallDark, color: "black" }
                : { ...fontSmallDark, color: "white" }
            }
          >
            No Tags Found
          </div>
        )}
      </FlexColWrapper>
    </Dialog>
  );
}


