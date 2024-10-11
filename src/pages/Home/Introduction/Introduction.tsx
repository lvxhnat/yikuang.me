import React from "react";
import * as S from "./style";
import { Grid, IconButton } from "@mui/material";
import ProfileLogo from "../../../assets/profile.png";
import Coffee from "../../../assets/coffee.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SocialMediaIcons from "../../../components/SocialMediaIcons";

export default function Introduction() {
  return (
    <Grid container sx={{ padding: 10, paddingTop: 0 }}>
      <Grid container>
        <Grid item xs={5} gap={1}>
          <S.TitleWrapper> Hey There,</S.TitleWrapper>
          <S.TitleWrapper>I'm Yi Kuang</S.TitleWrapper>
          <S.DescriptionWrapper align="left" style={{ paddingTop: "30px" }}>
            Data Scientist by trade, problem solver at heart.
          </S.DescriptionWrapper>
          <S.DescriptionWrapper align="left">
            With a passion for building data-centric products.
          </S.DescriptionWrapper>
          <S.StyledButtonWrapper>
            <S.StyledButton
              variant="contained"
              startIcon={<img src={Coffee} width="50px" />}
            >
              {" "}
              Lets grab a coffee!{" "}
            </S.StyledButton>
          </S.StyledButtonWrapper>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{ height: "300px" }}
      >
        <img
          src={ProfileLogo}
          style={{ height: "500px", position: "absolute", marginTop: -200 }}
        />
      </Grid>
      <Grid container>
        <SocialMediaIcons
            icon={<GitHubIcon fontSize="large"/>}
            action="redirect"
            url="https://github.com/lvxhnat"
        />
        <SocialMediaIcons
            icon={<LinkedInIcon fontSize="large"/>}
            action="redirect"
            url="https://www.linkedin.com/in/lohyikuang/"
        />
        <SocialMediaIcons
            icon={<LocalPhoneIcon fontSize="large"/>}
            action="copy"
            url="+65 8459 2359"
        />
        <SocialMediaIcons
            icon={<EmailIcon fontSize="large"/>}
            action="copy"
            url="yikuang5@gmail.com"
        />
      </Grid>
    </Grid>
  );
}
