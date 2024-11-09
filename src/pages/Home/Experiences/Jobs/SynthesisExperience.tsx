import * as React from "react";
import * as S from "../style";
import { LogoWrapper } from "./style";
import { Logos } from "../../logos";
import SynthesisLogo from "../../../../assets/logos/experiences/synthesis.png";
import { Grid, List } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../../../components/Image";
import ReadmorePopup from "../../../../components/ReadmorePopup";
import SynthesisExperience1 from "./SynthesisExperience/SynthesisExperience1";
import SynthesisExperience2 from "./SynthesisExperience/SynthesisExperience2";

export default function SynthesisExperience() {
  const synthesisSrc = "https://www.synthesis.partners/";
  return (
    <Grid container>
      <Grid container columns={18}>
        <S.ImageWrapper item md={2} xs={5}>
          <S.Image
            src={SynthesisLogo}
            onClick={() => window.open(synthesisSrc, "_blank")}
          />
        </S.ImageWrapper>
        <Grid
          item
          md={16}
          xs={18}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Grid container>
            <S.DynamicImageWrapper item md={2} xs={3}>
              <S.Image
                src={SynthesisLogo}
                onClick={() => window.open(synthesisSrc, "_blank")}
              />
            </S.DynamicImageWrapper>
            <Grid item md={12} xs={9}>
              <S.StyledTitle variant="h5">Data Scientist </S.StyledTitle>
              <S.StyledSubtitle variant="h6">
                Synthesis Partners - 🇸🇬 Singapore
              </S.StyledSubtitle>
            </Grid>
          </Grid>

          <S.StyledPosition>
            <b>Part-Time / Full-Time </b> (Aug 2022 - Jul 2023) , (Jan 2024 -
            Present)
          </S.StyledPosition>

          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
            Led effort in forecasting future scenarios for PepsiCo using <S.StyledLink target="_blank" href="https://link.springer.com/chapter/10.1007/978-3-031-01919-7_6">Fuzzy Cognitive Mapping</S.StyledLink> & Monte Carlo models. 
            Worked on forecasting product CAGR projections for structuring the Annual Operating Plan (AOP) for UK Snacks market with Pepsi’s foresight leads.
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
            Worked with a team of UIUX and DevOps engineers to develop a BERT-based topic model that outperformed both quantitative (coherence score) and qualitative metrics when benchmarked against LDA. 
            I worked on the FASTAPI backend, model implementation with NVIDIA RAPIDS libraries for
              <S.StyledLink href="https://www.nike.com"> Nike</S.StyledLink> and
              <S.StyledLink href="https://www.lego.com/en-sg/aboutus/lego-group">
                {" "}
                LEGO Group
              </S.StyledLink>
              , allowing them to gain deeper insights into public discourse surrounding
              brands.
            </S.StyledListItem>
          </List>

          <LogoWrapper style={{ justifyContent: "center" }}>
            {[
              "RAPIDS",
              "Dask",
              "Tensorflow",
              "Google Cloud",
              "FASTAPI",
              "D3",
            ].map((logoKey: string) => (
              <Image key={logoKey} {...Logos[logoKey as keyof typeof Logos]} />
            ))}
          </LogoWrapper>

          <ReadmorePopup
            title="Synthesis Partners"
            dialogContent={<SynthesisExperience1 />}
          />
        </Grid>

        <Grid item md={2}></Grid>
        <Grid
          item
          md={16}
          display="flex"
          flexDirection="column"
          gap={1}
          paddingTop="50px"
        >
          <S.StyledTitle variant="h5">Junior Data Scientist</S.StyledTitle>
          <S.StyledSubtitle variant="h6" color={ColorsEnum.grey}>
            Synthesis Partners - 🇸🇬 Singapore
          </S.StyledSubtitle>

          <S.StyledPosition>
            <b>Part-Time / Full-Time </b> (Nov 2020 - May 2022)
          </S.StyledPosition>

          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Led the creation of a social media analytics pipeline for
              forecasting podcast demand across 13 markets for
              <S.StyledLink href="https://www.bbc.com/"> BBC UK</S.StyledLink>.
              This framework was later rolled out globally and continues to
              serve as measurement benchmarks and key metrics in BBC's Charter.
            </S.StyledListItem>

            <S.StyledListItem sx={{ display: "list-item" }}>
              Worked with a team of DevOps engineers to implement resolution-free Leiden algorithms using NVIDIA cuGraph 
              to analyse large social networks on Twitter, and identify user demographics for <S.StyledLink href="https://about.netflix.com/en">
                {" "}
                Netflix
              </S.StyledLink>{" "} title releases in the Latin American market. 
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              I was the youngest member in the company to join the Data Science team part-time, 
              contributing to client projects and model research, while pursuing academic studies!
            </S.StyledListItem>
          </List>

          <LogoWrapper style={{ justifyContent: "center" }}>
            {["Tableau", "NetworkX", "Gephi", "Airflow", "Google Cloud"].map(
              (logoKey: string) => (
                <Image
                  key={logoKey}
                  {...Logos[logoKey as keyof typeof Logos]}
                />
              ),
            )}
          </LogoWrapper>
          <ReadmorePopup
            title="Synthesis Partners"
            dialogContent={<SynthesisExperience2 />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
