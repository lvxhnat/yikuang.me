import React from "react";
import * as S from "../style";
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
import NotionLink from "../../../../components/NotionLink";

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
          based RAG model that allows users to better understand the terminology
          used behind their medical reports. Because medical reports tend to be
          data sensitive, the model needed to be
          <StyledLink href="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html">
            {" "}
            HIPAA compliant{" "}
          </StyledLink>
          , which resulted in me taking the route of using self-hosted models.
          <br />
        </S.StyledContent>
        <S.StyledContent variant="body1">
          <br />
          The base model itself was a fine-tuned
          <StyledLink href="https://huggingface.co/google/flan-t5-base">
            {" "}
            Flan-T5 Base Model,{" "}
          </StyledLink>
          trained on the
          <StyledLink href="https://github.com/MIT-LCP/mimic-code">
            {" "}
            Physionet MIMIC Database
          </StyledLink>{" "}
          , and multiple other QA datasets found in the transformers library,
          which contains masked patient medical records. Evaluation metrics used
          is mainly the BERT score set.
          <br />
        </S.StyledContent>
        <S.StyledContent variant="body1">
          <br />
          All this was done on a single NVIDIA TITAN RTX GPU, which meant that I
          had to learnt alot about optimising CUDA memory usage!
        </S.StyledContent>
        <S.StyledContent variant="body1">
          <br />
          Read my notes from the project here:
          <br />
          <NotionLink href="https://notion.so" title="LLM Introduction" />
        </S.StyledContent>
      </Grid>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LogoWrapper sx={{ paddingTop: 2, justifyContent: "center" }}>
          {skills.map((v) => (
            <Image key={v} {...Logos[v]} />
          ))}
        </LogoWrapper>
      </Grid>
    </Grid>
  );
}
