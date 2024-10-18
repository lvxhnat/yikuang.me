import React from "react";
import * as S from "./style";
import { ColorsEnum } from "../../../../common/theme";
import { Typography } from "@mui/material";
interface PictureFrameProps {
  img: any;
  caption: string;
  [others: string]: any;
}
export default function PictureFrame(props: PictureFrameProps) {
  return (
    <S.Container style={{ height: props.height }}>
      <img src={props.img} width="100%" {...props} />
      <Typography
        variant="overline"
        align="center"
        lineHeight={1.5}
        color={ColorsEnum.grey}
      >
        {props.caption}
      </Typography>
    </S.Container>
  );
}
