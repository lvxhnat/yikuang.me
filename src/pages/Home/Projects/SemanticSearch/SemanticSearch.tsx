import React from "react";
import * as S from "./style";
import { Grid } from "@mui/material";
import Seq1 from "../../../../assets/projects/semantic-search/seq-1.png";
import Seq2 from "../../../../assets/projects/semantic-search/seq-2.png";
import Seq3 from "../../../../assets/projects/semantic-search/seq-3.png";
import Seq4 from "../../../../assets/projects/semantic-search/seq-4.png";
import ImageCarousel from "../../../../components/ImageCarousel";
import { StyledLink } from "../../Experiences/style";
import { LogoWrapper } from "../../style";
import Image from "../../../../components/Image";
import { Logos } from "../../logos";

export default function SemanticSearch() {
  const skills = [
    "HuggingFace",
    "Tensorflow",
    "ChromaDB",
    "Spacy",
    "React",
    "FASTAPI",
  ];
  return (
    <Grid>
      <Grid container>
        <ImageCarousel images={[Seq1, Seq2, Seq3, Seq4]} />
      </Grid>
      <Grid container sx={{ paddingTop: "20px" }}>
        <S.StyledContent variant="body1">
          Continuing from my time at Infiniwell, I went on to create a medical
          based multi-modal RAG that allows users to better understand the
          terminology used behind their medical reports. Because medical reports
          tend to be data sensitive, and solutions need to be
          <StyledLink href="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html">
            {" "}
            HIPAA compliant{" "}
          </StyledLink>
          , I took the route of using self-hosted models.
          <br />
        </S.StyledContent>
        <S.StyledContent variant="body1">
          <br />
          The base model itself was a fine-tuned
          <StyledLink href="https://huggingface.co/google-t5/t5-base">
            {" "}
            T5 Base Model,{" "}
          </StyledLink>
          trained on the
          <StyledLink href="https://github.com/MIT-LCP/mimic-code">
            {" "}
            Physionet MIMIC Database
          </StyledLink>{" "}
          which contains masked patient medical records. Evaluation metrics used
          were the BERT and ROUGE scores.
          <br />
        </S.StyledContent>
        <S.StyledContent variant="body1">
          <br />
          All this was done on a single NVIDIA TITAN RTX GPU, which meant that I
          had to learnt alot about optimising CUDA memory usage!
        </S.StyledContent>
      </Grid>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LogoWrapper sx={{ paddingTop: 2 }}>
          {skills.map((v) => (
            <Image key={v} {...Logos[v]} />
          ))}
        </LogoWrapper>
      </Grid>
    </Grid>
  );
}
