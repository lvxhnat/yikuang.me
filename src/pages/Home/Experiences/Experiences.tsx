import * as S from "./style";
import { Grid } from "@mui/material";
import React from "react";

export default function Experiences() {
  return (
    <Grid container sx={{ padding: 10 }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Skills{" "}
        </S.TitleWrapper>
      </Grid>
    </Grid>
  );
}
