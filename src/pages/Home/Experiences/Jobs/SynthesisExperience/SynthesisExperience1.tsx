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
    <S.SynthesisExperienceContainer>
      <S.ImageContainer container spacing={5}>
        <Grid item xs={12} md={6}>
          <PictureFrame
            img={DashboardImage}
            caption="Dashboard Sample"
            style={{ maxHeight: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <PictureFrame
            caption="2D-Embedding Map of Reddit Conversations on Trump"
            img={EmbeddingImage}
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <PictureFrame
            caption="2D-Embedding Map of Twitter Conversations on Biden"
            img={EmbeddingImage2}
            style={{ maxHeight: "250px", maxWidth: "250px" }}
          />
        </Grid>
      </S.ImageContainer>
      <Grid container>
        <Typography variant="body1">
          One of the main projects that I worked on was a topic modelling tool
          adapted for processing large text corpuses. These corpuses usually
          contain conversations from platforms such as
          <SM.StyledLink href="https://x.com/">
            {" "}
            Twitter (Now X)
          </SM.StyledLink>{" "}
          which are sometimes too large to perform analytics on within an
          acceptable time. <br />
          <br />
        </Typography>
        <Typography variant="body1">
          To do this, I had to implement a model pipeline using the
          <SM.StyledLink href="https://rapids.ai/">
            {" "}
            NVIDIA RAPIDS Library
          </SM.StyledLink>{" "}
          (cuDF, cuML) and
          <SM.StyledLink href="https://sbert.net/docs/sentence_transformer/pretrained_models.html">
            {" "}
            Sentence Transformers
          </SM.StyledLink>{" "}
          for topic modelling. The model itself utilises
          <SM.StyledLink href="https://umap-learn.readthedocs.io/en/latest/">
            {" "}
            UMAP
          </SM.StyledLink>{" "}
          and{" "}
          <SM.StyledLink href="https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html">
            HDBSCAN
          </SM.StyledLink>{" "}
          for dimension reduction and clustering, providing a robust framework
          for identifying both outlier and prominent topic clusters.
          <br />
          <br />
          This was a major undertaking, and included many interesting
          optimisations on the backend, such as the calculation of cosine
          similarities using{" "}
          <SM.StyledLink href="https://cupy.dev/">cuPy</SM.StyledLink>:
        </Typography>
        <code style={{ fontSize: "0.7rem" }}>
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
    </S.SynthesisExperienceContainer>
  );
}
