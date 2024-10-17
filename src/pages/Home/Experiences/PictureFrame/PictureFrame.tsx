import React from "react";
import { ColorsEnum } from "../../../../common/theme";
import { Typography } from "@mui/material";
interface PictureFrameProps {
  img: any;
  caption: string;
  height: string;
  [others: string]: any;
}
export default function PictureFrame(props: PictureFrameProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: props.height,
      }}
    >
      <img src={props.img} width="100%" {...props} />
      <Typography
        variant="overline"
        align="center"
        lineHeight={1.5}
        color={ColorsEnum.grey}
      >
        {props.caption}
      </Typography>
    </div>
  );
}
