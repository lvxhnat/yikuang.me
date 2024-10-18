import React from "react";
import * as S from "./style";
import * as SM from "../style";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import SemanticSearchCover from "../../../assets/projects/semantic-search/cover.png";
import SharesiteCover from "../../../assets/projects/sharesite/cover.png";
import StartupsCover from "../../../assets/projects/startup/mavro.png";

import SemanticSearch from "./SemanticSearch";
import NumerousFailedStartups from "./NumerousFailedStartups";

interface ProjectsProps {
  [others: string]: any;
}

function Projects(props: ProjectsProps, ref: any) {
  return (
    <S.ContainerWrapper container ref={ref}>
      <SM.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Projects{" "}
      </SM.TitleWrapper>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <ProjectCard
            image={SemanticSearchCover}
            title="MedRAG"
            category="Project"
            subtitle="Fine tuned generative T5 for simplifying and explaining medical records to patients"
            description="Feb 2024 - Present"
            dialogContent={<SemanticSearch />}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ProjectCard
            image={StartupsCover}
            title="Entrepreneurship"
            category="Others"
            subtitle="I have tested many ideas over the years, pitched, and developed failed products. This section is dedicated to my startup graveyard 🪦 and the journeys along the way."
            description="Feb 2022 - Present"
            dialogContent={<NumerousFailedStartups />}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ProjectCard
            image={SharesiteCover}
            title="Sharesite"
            category="Project"
            subtitle="
            Sharesite allows users to build their own personal portfolios in minutes, not days. 
            Abstract away design & coding and focus on the good part - the content you want to put in your portfolio."
            description="Mar 2024 - Jul 2024"
            redirectURL="https://sharesite.me/"
            dialogContent={<></>}
          />
        </Grid>
      </Grid>
    </S.ContainerWrapper>
  );
}

export default React.forwardRef(Projects);
