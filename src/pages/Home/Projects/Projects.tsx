import { Grid } from "@mui/material";
import React from "react";
import * as S from "../style";

interface ProjectsProps {
  [others: string]: any;
}

function Projects(props: ProjectsProps, ref: any) {
  return (
    <Grid container ref={ref} sx={{ padding: 10 }}>
      <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Projects{" "}
      </S.TitleWrapper>
    </Grid>
  );
}

export default React.forwardRef(Projects);
