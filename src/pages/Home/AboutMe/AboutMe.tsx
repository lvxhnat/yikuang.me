import * as S from "./style";
import { Grid } from "@mui/material";

export default function AboutMe() {
  return (
    <S.ContainerWrapper>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <S.TitleWrapper>About Me</S.TitleWrapper>
        <S.DescriptionWrapper>
          I find joy in the nuances and intersections of real world problem solving and data science. 
          Outside of work, I love travelling, fishing, the occasional chess game, 
          and anything that makes me feel alive.
        </S.DescriptionWrapper>
      </Grid>
    </S.ContainerWrapper>
  );
}
