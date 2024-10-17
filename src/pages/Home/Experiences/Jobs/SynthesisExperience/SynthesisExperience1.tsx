import React from "react";
import * as S from "../../style";

import { Grid, Typography } from "@mui/material";
import EmbeddingImage from "../../../../../assets/logos/projects/embedding-map.png";
import EmbeddingImage2 from "../../../../../assets/logos/projects/embedding-map-2.png";
import DashboardImage from "../../../../../assets/logos/projects/dashboard.png";
import PictureFrame from "../../PictureFrame";

export default function SynthesisExperience1() {
  return (
    <Grid container sx={{ padding: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <PictureFrame
            height="280px"
            img={DashboardImage}
            caption="Dashboard Sample"
            style={{ maxHeight: "250px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <PictureFrame
            height="280px"
            caption="2D-Embedding Map of Reddit Conversations on Trump"
            img={EmbeddingImage}
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <PictureFrame
            height="280px"
            caption="2D-Embedding Map of Twitter Conversations on Biden"
            img={EmbeddingImage2}
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />
        </Grid>
      </Grid>
      <Grid container paddingTop={3}>
        <Typography variant="body1">
          One of the main projects that I worked on was a topic modelling tool
          adapted for large corpus datasets. Corpuses of text that were scraped
          from platforms like
          <S.StyledLink href="https://x.com/">
            {" "}
            Twitter (Now X)
          </S.StyledLink>{" "}
          are sometimes too large to perform analytics on. <br />
          <br />
        </Typography>
        <Typography variant="body1">
          I had to opportunity to construct the model pipeline using the
          <S.StyledLink href="https://rapids.ai/">
            {" "}
            NVIDIA RAPIDS Library
          </S.StyledLink>{" "}
          (cuDF, cuML) and
          <S.StyledLink href="https://sbert.net/docs/sentence_transformer/pretrained_models.html">
            {" "}
            Sentence Transformers
          </S.StyledLink>
          to craft an end-to-end solution for data analytics.
        </Typography>
      </Grid>
    </Grid>
  );
}
