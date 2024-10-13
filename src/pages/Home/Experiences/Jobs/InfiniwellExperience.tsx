import * as React from "react";
import * as S from "../style";
import { LogoWrapper } from "./style";
import { Logos } from "../../logos";
import { Grid, List, Typography } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../Image";
import InfiniwellLogo from "../../../../assets/logos/experiences/infiniwell.png";
import ReadmorePopup from "../../ReadmorePopup";

export default function InfiniwellExperience() {
  const infiniwellSrc = "https://www.infiniwell.ai/";
  return (
    <Grid container>
      <Grid container columns={18}>
        <Grid item xs={2}>
          <S.Image
            src={InfiniwellLogo}
            onClick={() => window.open(infiniwellSrc, "_blank")}
          />
        </Grid>
        <Grid item xs={16} display="flex" flexDirection="column" gap={1}>
          <S.StyledTypography variant="h5">
            ML Engineer Intern
          </S.StyledTypography>
          <S.StyledTypography variant="h6" color={ColorsEnum.grey}>
            Infiniwell AI - 🇳🇴 Norway, Trondheim
          </S.StyledTypography>
          <span>
            <b> Internship </b>(Aug 2023 - Dec 2024)
          </span>
          <List sx={{ listStyleType: "disc" }}>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Developed an Attention-ResNet based model to forecast 30 heart
              conditions, achieving a 0.71 F1-Score. This model was later
              deployed for preliminary diagnoses for medical services such as
              <S.StyledLink href="https://www.schiller.ch/en">
                {" "}
                Schiller
              </S.StyledLink>
              .
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Constructed a preprocessing pipeline for ECG waveforms using
              signal processing methods such as FFT and Pan-Thompkins for
              detecting QRS complexes.
            </S.StyledListItem>
            <S.StyledListItem sx={{ display: "list-item" }}>
              Optimized and set up ML research infrastructure for deep learning
              models, reducing average GPU memory usage by 12%.
            </S.StyledListItem>
          </List>
          <LogoWrapper>
            {["Tensorflow", "Neptune", "Dagshub", "Kedro", "FASTAPI"].map(
              (logoKey: string) => (
                <Image
                  key={logoKey}
                  {...Logos[logoKey as keyof typeof Logos]}
                />
              ),
            )}
          </LogoWrapper>
          <ReadmorePopup title="Infiniwell.ai" dialogContent="" />
        </Grid>
      </Grid>
    </Grid>
  );
}
