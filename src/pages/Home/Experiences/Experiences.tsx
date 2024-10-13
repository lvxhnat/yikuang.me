import * as S from "./style";
import * as React from "react";
import { Grid } from "@mui/material";
import {
  SynthesisExperience,
  InfiniwellExperience,
  RazerExperience,
} from "./Jobs";

interface ExperiencesProps {
  [others: string]: any;
}

function Experiences(props: ExperiencesProps, ref: any) {
  return (
    <Grid ref={ref} container sx={{ padding: 10 }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Experience{" "}
        </S.TitleWrapper>
        <SynthesisExperience />
        <S.Divider1 />
        <InfiniwellExperience />
        <S.Divider2 />
        <RazerExperience />
      </Grid>
    </Grid>
  );
}

export default React.forwardRef(Experiences);
