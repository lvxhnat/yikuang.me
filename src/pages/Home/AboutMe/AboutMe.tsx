import React from "react";
import * as S from "./style";
import { Grid, Typography } from "@mui/material";
import { ColorsEnum } from "../../../common/theme";

export default function AboutMe() {
  return (
    <S.ContainerWrapper>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <S.TitleWrapper>About Me</S.TitleWrapper>
        <S.DescriptionWrapper>
          I find joy in the nuanced intersections of software engineering and
          data science. Crafting scalable programs is particularly exhilarating
          for me as I find a unique thrill in building systems that can adapt
          and grow, knowing that they can support an ever-increasing demand
          without faltering.
        </S.DescriptionWrapper>
      </Grid>
    </S.ContainerWrapper>
  );
}
