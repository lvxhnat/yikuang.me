import React from "react";
import * as S from "./style";
import { Grid } from "@mui/material";
import ProfileLogo from "../../../assets/profile.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SocialMediaIcons from "../../../components/SocialMediaIcons";

export default function Introduction() {
  return (
    <S.IntroductionContainer container>
      <Grid container>
        <Grid item xs={12} md={5} gap={1}>
          <S.TitleWrapper> Hey There,</S.TitleWrapper>
          <S.TitleWrapper>I'm Yi Kuang</S.TitleWrapper>
          <S.DescriptionWrapper
            align="left"
            style={{ paddingTop: "30px", paddingBottom: "10px" }}
          >
            Data Scientist by trade, problem solver at heart.
          </S.DescriptionWrapper>

          <S.SocialMediaWrapper container gap={2}>
            <SocialMediaIcons
              icon={<GitHubIcon fontSize="large" />}
              action="redirect"
              url="https://github.com/lvxhnat"
            />
            <SocialMediaIcons
              icon={<LinkedInIcon fontSize="large" />}
              action="redirect"
              url="https://www.linkedin.com/in/lohyikuang/"
            />
            <SocialMediaIcons
              icon={<LocalPhoneIcon fontSize="large" />}
              action="copy"
              url="+65 8459 2359"
            />
            <SocialMediaIcons
              icon={<EmailIcon fontSize="large" />}
              action="copy"
              url="yikuang5@gmail.com"
            />
          </S.SocialMediaWrapper>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <S.ProfileContainerWrapper container>
        <S.Image src={ProfileLogo} />
      </S.ProfileContainerWrapper>
    </S.IntroductionContainer>
  );
}
