import * as React from "react";
import * as S from "../style";
import { LogoWrapper } from "./style";
import { Logos } from "../../logos";
import { Grid, List, Typography } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../Image";
import RazerLogo from "../../../../assets/logos/experiences/razer.png";
import ReadmorePopup from "../../ReadmorePopup";

export default function RazerExperience() {
  const razerSrc = "https://www.razer.com/";
  return (
    <Grid container>
      <Grid container columns={18}>
        <Grid item xs={2}>
          <S.Image
            src={RazerLogo}
            onClick={() => window.open(razerSrc, "_blank")}
          />
        </Grid>
        <Grid item xs={16} display="flex" flexDirection="column" gap={1}>
          <S.StyledTypography variant="h5">
            Data Science Intern
          </S.StyledTypography>
          <S.StyledTypography variant="h6" color={ColorsEnum.grey}>
            Razer Inc - 🇸🇬 Singapore
          </S.StyledTypography>
          (May 2022 - Aug 2022)
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
          <LogoWrapper>
            {["Datahub", "Tensorflow", "AWS"].map((logoKey: string) => (
              <Image key={logoKey} {...Logos[logoKey as keyof typeof Logos]} />
            ))}
          </LogoWrapper>
          <ReadmorePopup title="Razer Inc" dialogContent="" />
        </Grid>
      </Grid>
    </Grid>
  );
}
