import * as React from "react";
import * as S from "../style";
import { LogoWrapper } from "./style";
import { Logos } from "../../logos";
import { Grid, List } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../../../components/Image";
import RazerLogo from "../../../../assets/logos/experiences/razer.png";

export default function RazerExperience() {
  const razerSrc = "https://www.razer.com/";
  return (
    <S.RazerContainer container>
      <Grid container columns={18}>
        <S.ImageWrapper item md={2} xs={5}>
          <S.Image
            src={RazerLogo}
            onClick={() => window.open(razerSrc, "_blank")}
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
                src={RazerLogo}
                onClick={() => window.open(razerSrc, "_blank")}
              />
            </S.DynamicImageWrapper>
            <Grid item md={12} xs={9}>
              <S.StyledTitle variant="h5">Data Science Intern</S.StyledTitle>
              <S.StyledSubtitle variant="h6" color={ColorsEnum.grey}>
                Razer Inc - 🇸🇬 Singapore
              </S.StyledSubtitle>
            </Grid>
          </Grid>
          <S.StyledPosition>
            <b>Internship</b> (May 2022 - Aug 2022)
          </S.StyledPosition>
          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Implemented a Fraud Detection Model with TinyBERT on AWS Sagemaker
              achieving a 0.93 F1-Score.
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Designed a data catalogue using DataHub equipped with IAM and Data
              Lineage Visualisations, reducing dataset search time by 30% across
              10 departments.
            </S.StyledListItem>
          </List>
          <LogoWrapper style={{ justifyContent: "center" }}>
            {["Datahub", "Tensorflow", "Neptune", "AWS"].map(
              (logoKey: string) => (
                <Image
                  key={logoKey}
                  {...Logos[logoKey as keyof typeof Logos]}
                />
              ),
            )}
          </LogoWrapper>
        </Grid>
      </Grid>
    </S.RazerContainer>
  );
}
