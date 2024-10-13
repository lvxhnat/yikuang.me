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
      <Grid container display="flex" alignItems="center" width="100%" spacing={2}>
        <Grid item xs={4}>
          <ProjectCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" title="" description="" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.forwardRef(Projects);
