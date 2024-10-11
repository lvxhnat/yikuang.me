import { Grid } from "@mui/material";
import React from "react";
import * as S from "./style";

export default function Projects() {
  return (
    <Grid container sx={{ padding: 10 }}>
      <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Projects{" "}
      </S.TitleWrapper>
    </Grid>
  );
}
