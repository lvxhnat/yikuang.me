import * as React from "react";
import { Box, Typography } from "@mui/material";
import NotionLogo from "../../assets/logos/misc/notion.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ColorsEnum } from "../../common/theme";

interface NotionLinkProps {
  href: string;
  title: string;
}

export default function NotionLink(props: NotionLinkProps) {
  return (
    <Box
      sx={{
        paddingLeft: "5px",
        paddingBottom: "2px",
        fontSize: "13px",
        color: ColorsEnum.black,
        position: "relative",
        display: "inline-flex",
        alignItems: "flex-end",
        top: "3px",
        "&:hover": {
          cursor: "pointer",
          color: ColorsEnum.darkGrey,
        },
      }}
      onClick={() => window.open(props.href, "_blank")}
    >
      <Typography
        component="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        variant="inherit"
        color="inherit"
        gap={1}
      >
        <img src={NotionLogo} alt="" width="20px" />
        {props.title}
      </Typography>
      <ArrowOutwardIcon
        fontSize="inherit"
        sx={{
          position: "absolute",
          marginLeft: "14px",
          marginBottom: "-4px",
          backgroundColor: "white",
          borderRadius: "100%",
        }}
      />
    </Box>
  );
}
