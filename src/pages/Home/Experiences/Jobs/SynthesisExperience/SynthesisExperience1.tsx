import React from "react";
import * as SM from "../../style";
import * as S from "./style";

import { Grid, Typography } from "@mui/material";
import EmbeddingImage from "../../../../../assets/logos/projects/embedding-map.png";
import EmbeddingImage2 from "../../../../../assets/logos/projects/embedding-map-2.png";
import DashboardImage from "../../../../../assets/logos/projects/dashboard.png";
import PictureFrame from "../../PictureFrame";

export default function SynthesisExperience1() {
  return (
    <S.FooterContainer>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <PictureFrame
            height="280px"
            img={DashboardImage}
            caption="Dashboard Sample"
            style={{ maxHeight: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <PictureFrame
            height="280px"
            caption="2D-Embedding Map of Reddit Conversations on Trump"
            img={EmbeddingImage}
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
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
          adapted for large corpus datasetSM. Corpuses of text that were scraped
          from platforms like
          <SM.StyledLink href="https://x.com/">
            {" "}
            Twitter (Now X)
          </SM.StyledLink>{" "}
          are sometimes too large to perform analytics on. <br />
          <br />
        </Typography>
        <Typography variant="body1">
          I had to opportunity to implement the full model pipeline using the
          <SM.StyledLink href="https://rapidSM.ai/">
            {" "}
            NVIDIA RAPIDS Library
          </SM.StyledLink>{" "}
          (cuDF, cuML) and
          <SM.StyledLink href="https://sbert.net/docs/sentence_transformer/pretrained_modelSM.html">
            {" "}
            Sentence Transformers
          </SM.StyledLink>{" "}
          to for topic modelling. The model itself utilises
          <SM.StyledLink href="https://umap-learn.readthedocSM.io/en/latest/">
            {" "}
            UMAP
          </SM.StyledLink>{" "}
          and{" "}
          <SM.StyledLink href="https://hdbscan.readthedocSM.io/en/latest/how_hdbscan_workSM.html">
            HDBSCAN
          </SM.StyledLink>{" "}
          for clustering, providing a robust framework for identifying both
          outlier and prominent topic clusterSM.
          <br />
          <br />
          This was a major undertaking, and included many interesting
          optimisations on the backend, such as the calculation of cosine
          similarities using{" "}
          <SM.StyledLink href="https://cupy.dev/">cuPy</SM.StyledLink>:
        </Typography>
        <code>
          <pre>
            {`
          import cupy

          # can expect more speed ups due to GPU utilisation # base similarity matrix (all dot products)
          # replace this with A.dot(A.T).toarray() for sparse representation
          similarity = cupy.dot(A, A.T)
          
          # squared magnitude of preference vectors (number of occurrences)
          # inverse squared magnitude
          inv_square_mag = 1 / cupy.diag(similarity)
          
          # if doesn't occur, set inverse magnitude to zero (instead of inf)
          inv_square_mag[cupy.isinf(inv_square_mag)] = 0
          
          # inverse of the magnitude
          inv_mag = cupy.sqrt(inv_square_mag)
          
          # cosine similarity (elementwise multiply by inverse magnitudes)
          cosine = (similarity * inv_mag).T * inv_mag # Range between 0 and 1
          `}
          </pre>
        </code>
        <Typography variant="body1"></Typography>
      </Grid>
    </S.FooterContainer>
  );
}
