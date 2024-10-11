import React from "react";
import * as S from "./style";
import { Grid, Typography } from "@mui/material";
import { ColorsEnum } from "../../../common/theme";

export default function AboutMe() {
  return (
    <Grid container sx={{ backgroundColor: ColorsEnum.white, padding: 15 }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <S.TitleWrapper>About Me</S.TitleWrapper>
        <S.DescriptionWrapper>
          Insert some introduction about myself that is at most 3 lines long so
          that it doesnt get boring. Something like this is already considerably
          long, and I wouldnt go any worse.
        </S.DescriptionWrapper>
      </Grid>
    </Grid>
  );
}
