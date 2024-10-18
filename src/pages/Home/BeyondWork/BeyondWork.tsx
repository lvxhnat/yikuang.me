import * as React from "react";
import * as S from "./style";
import { Grid } from "@mui/material";

export default function BeyondWork() {
  return (
    <Grid container sx={{ padding: 10, paddingTop: 0 }}>
      <Grid container></Grid>
      <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Beyond Work{" "}
      </S.TitleWrapper>
    </Grid>
  );
}
