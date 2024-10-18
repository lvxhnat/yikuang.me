import * as React from "react";
import * as S from "../style";
import { LogoWrapper } from "./style";
import { Logos } from "../../logos";
import { Grid, List } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";
import Image from "../../../../components/Image";
import InfiniwellLogo from "../../../../assets/logos/experiences/infiniwell.png";
import ReadmorePopup from "../../../../components/ReadmorePopup";

export default function InfiniwellExperience() {
  const infiniwellSrc = "https://www.infiniwell.ai/";
  return (
    <S.InfiniwellContainer container>
      <Grid container columns={18}>
        <S.ImageWrapper item md={2} xs={5}>
          <S.Image
            src={InfiniwellLogo}
            onClick={() => window.open(infiniwellSrc, "_blank")}
          />
        </S.ImageWrapper>
        <Grid
          item
          xs={18}
          md={16}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Grid container>
            <S.DynamicImageWrapper item md={2} xs={3}>
              <S.Image
                src={InfiniwellLogo}
                onClick={() => window.open(infiniwellSrc, "_blank")}
              />
            </S.DynamicImageWrapper>
            <Grid item md={12} xs={9}>
              <S.StyledTitle variant="h5">ML Engineer Intern</S.StyledTitle>
              <S.StyledSubtitle variant="h6" color={ColorsEnum.grey}>
                Infiniwel AI - 🇳🇴 Trondheim
              </S.StyledSubtitle>
            </Grid>
          </Grid>
          <S.StyledPosition>
            <b> Internship </b>(Aug 2023 - Dec 2024)
          </S.StyledPosition>
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
          <LogoWrapper style={{ justifyContent: "center" }}>
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
    </S.InfiniwellContainer>
  );
}
