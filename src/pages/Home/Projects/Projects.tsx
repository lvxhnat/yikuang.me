import React from "react";
import * as S from "./style";
import * as SM from "../style";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import SemanticSearchCover from "../../../assets/projects/semantic-search/cover.png";
import SharesiteCover from "../../../assets/projects/sharesite/cover.png";
import StartupsCover from "../../../assets/projects/startup/mavro.png";
import WatchtowerCover from "../../../assets/projects/watchtower/superset.png";
import InflosCover from "../../../assets/projects/inflos.png";

import SemanticSearch from "./SemanticSearch";
import NumerousFailedStartups from "./NumerousFailedStartups";
import Watchtower from "./Watchtower";

interface ProjectsProps {
  [others: string]: any;
}

function Projects(props: ProjectsProps, ref: any) {
  return (
    <S.ContainerWrapper container ref={ref}>
      <SM.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Software Projects & Others {" "}
      </SM.TitleWrapper>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <ProjectCard
            image={SemanticSearchCover}
            title="MedRAG"
            category="Project"
            subtitle="A RAG Augmented Fine Tuned (RAFT) model using a Fine-tuned Flan-T5 for simplifying and explaining medical records to patients."
            description="Feb 2024 - Present"
            dialogContent={<SemanticSearch />}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ProjectCard
            image={InflosCover}
            title="Inflos"
            category="Project"
            subtitle="
            Building one of the biggest marketplaces in Singapore for exotic plants and aroids. Gained $2000 in sales and 400 active users within the first month of launching!"
            description="Oct 2024 - Present"
            redirectURL="https://inflos.co/"
            dialogContent={<></>}
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
            image={WatchtowerCover}
            title="Watchtower"
            category="Project"
            subtitle="
            Watchtower is my personal trading environment, an ambitious project set out to build my own Bloomberg. 
            Integrated with features that I have learnt over the years.
            "
            description="Jun 2020 - Present"
            dialogContent={<Watchtower />}
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
            description="Jun 2024 - Jul 2024"
            redirectURL="https://sharesite.me/"
            dialogContent={<></>}
          />
        </Grid>
      </Grid>
    </S.ContainerWrapper>
  );
}

export default React.forwardRef(Projects);
