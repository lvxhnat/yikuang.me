import React from 'react'
import * as S from "../../style";

import { Grid, Typography } from '@mui/material';
import EmbeddingImage from "../../../../../assets/logos/projects/embedding-map.png";
import DashboardImage from "../../../../../assets/logos/projects/dashboard.png";
import { ColorsEnum } from '../../../../../common/theme';

export default function SynthesisExperience1() {
    return (
      <Grid container>
        <Grid
          item
          xs={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <img src={DashboardImage} width="100%" style={{ maxWidth: "450px" }} />
          <Typography
            variant="overline"
            align="center"
            lineHeight={1.5}
            color={ColorsEnum.grey}
          >
            Dashboard Sample
          </Typography>
          <img src={EmbeddingImage} width="100%" style={{ maxWidth: "300px" }} />
          <Typography
            variant="overline"
            align="center"
            lineHeight={1.5}
            color={ColorsEnum.grey}
          >
            2D-Embedding Map of Twitter Conversations
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body1">
            One of the main projects that I worked on was a topic modelling tool
            adapted for large corpus datasets. Corpuses that were scraped from
            platforms like
            <S.StyledLink href="https://x.com/">
              {" "}
              Twitter (Now X)
            </S.StyledLink>{" "}
            are sometimes too large to perform analytics on. <br/><br/>
          </Typography>
          <Typography variant="body1">
            I had to opportunity to construct the model using some <S.StyledLink href="https://rapids.ai/"> NVIDIA RAPIDS Library</S.StyledLink>
          </Typography>
        </Grid>
      </Grid>
    );
  };
  