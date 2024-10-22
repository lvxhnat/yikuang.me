import React from "react";
import * as S from "../style";
import WatchtowerArchitecture from "../../../../assets/projects/watchtower/watchtower-architecture.png";
import Superset from "../../../../assets/projects/watchtower/superset.png";
import Prefect from "../../../../assets/projects/watchtower/prefect.png";
import { Grid, Typography } from "@mui/material";
import ImageCarousel from "../../../../components/ImageCarousel";
import { LogoWrapper } from "../../style";
import Image from "../../../../components/Image";
import { Logos } from "../../logos";
import { StyledLink } from "../../Experiences/style";

export default function Watchtower() {
  const skills = ["Prefect", "Superset", "FASTAPI", "PostgreSQL", "Docker"];
  return (
    <Grid container>
      <Grid container>
        <ImageCarousel images={[WatchtowerArchitecture, Superset, Prefect]} />
      </Grid>
      <Typography></Typography>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <S.StyledContent>
          See the project demo
          <StyledLink href="https://drive.google.com/file/d/1t0dz27WQhOmQMBp5b0-dSOZvYPvR0mbo/view?usp=sharing">
            {" "}
            here.
          </StyledLink>
        </S.StyledContent>
        <LogoWrapper sx={{ paddingTop: 2, justifyContent: "center" }}>
          {skills.map((v) => (
            <Image key={v} {...Logos[v]} />
          ))}
        </LogoWrapper>
      </Grid>
    </Grid>
  );
}
