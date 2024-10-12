import * as React from "react";
import * as S from "../style";
import * as SM from "../../style";
import { Logos } from "../../logos";
import SynthesisLogo from "../../../../assets/logos/experiences/synthesis.png";
import { Grid, List, Typography } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../../../components/Image";

interface LogoWrapperProps {
  children: any;
}
const LogoWrapper = (props: LogoWrapperProps) => (
  <SM.LogoWrapper
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    }}
  >
    {props.children}
  </SM.LogoWrapper>
);

export default function SynthesisExperience() {
  const synthesisSrc = "https://www.synthesis.partners/";
  return (
    <Grid container>
      <Grid container columns={18}>
        <Grid item xs={2}>
          <S.Image
            src={SynthesisLogo}
            onClick={() => window.open(synthesisSrc, "_blank")}
          />
        </Grid>
        <Grid item xs={16} display="flex" flexDirection="column" gap={1}>
          <S.StyledTypography variant="h5">
            L1 Data Scientist
          </S.StyledTypography>
          <S.StyledTypography variant="h6" color={ColorsEnum.grey}>
            Synthesis Partners
          </S.StyledTypography>
          (Aug 2022 - Jul 2023) , (Jan 2024 - Present)
          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Developed an embedding-based topic model on RAPIDS that ran 2.3x
              faster and achieved a 21% higher coherence score than Latent
              Dirichlet Allocation (LDA) methods that is used across large
              client projects such as
              <S.StyledLink href="https://www.nike.com"> Nike</S.StyledLink> and
              <S.StyledLink href="https://www.lego.com/en-sg/aboutus/lego-group">
                {" "}
                LEGO Group
              </S.StyledLink>
              .
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              # Led effort in forecasting category trends for PepsiCo using
              Fuzzy Cognitive Mapping & Monte Carlo models.
            </S.StyledListItem>
          </List>
          <LogoWrapper>
            {[
              "RAPIDS",
              "VertexAI",
              "Tensorflow",
              "Google Cloud",
              "FASTAPI",
              "Spacy",
            ].map((logoKey: string) => (
              <Image key={logoKey} {...Logos[logoKey as keyof typeof Logos]} />
            ))}
          </LogoWrapper>
          <S.StyledButtonWrapper>
            <S.StyledButton variant="contained">
              <Typography variant="body1">Tell me more!</Typography>
            </S.StyledButton>
          </S.StyledButtonWrapper>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={16}
          display="flex"
          flexDirection="column"
          gap={1}
          paddingTop="50px"
        >
          <S.StyledTypography variant="h5">
            Junior Data Scientist
          </S.StyledTypography>
          <S.StyledTypography variant="h6" color={ColorsEnum.grey}>
            Synthesis Partners
          </S.StyledTypography>
          (Nov 2020 - May 2022)
          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Implemented ETL on Airflow using rotating proxies for scraping
              social media, cutting data curation time by half.
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Led the creation of a social media analytics pipeline for
              forecasting podcast demand across 13 markets for
              <S.StyledLink href="https://www.bbc.com/"> BBC UK</S.StyledLink>.
              This framework was later rolled out globally and continues to
              serve as measurement benchmarks and key metrics in BBC's Charter.
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Implemented resolution-free Leiden algorithms for analysing large
              social networks that ran 3x faster than benchmarks for
              <S.StyledLink href="https://about.netflix.com/en">
                {" "}
                Netflix
              </S.StyledLink>
              , reducing analytics time.
            </S.StyledListItem>
          </List>
          <LogoWrapper>
            {["Tableau", "NetworkX", "Gephi", "Airflow", "Google Cloud"].map(
              (logoKey: string) => (
                <Image
                  key={logoKey}
                  {...Logos[logoKey as keyof typeof Logos]}
                />
              ),
            )}
          </LogoWrapper>
          <S.StyledButtonWrapper>
            <S.StyledButton variant="contained">
              <Typography variant="body1">Tell me more!</Typography>
            </S.StyledButton>
          </S.StyledButtonWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
}
