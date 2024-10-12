import { Grid } from "@mui/material";
import React from "react";
import * as S from "../style";
import ProjectCard from "../../../components/ProjectCard";

interface ProjectsProps {
  [others: string]: any;
}

function Projects(props: ProjectsProps, ref: any) {
  return (
    <Grid container ref={ref} sx={{ padding: 10, width: "100%" }}>
      <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Projects{" "}
      </S.TitleWrapper>
      <Grid container display="flex" alignItems="center" width="100%">
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.forwardRef(Projects);
