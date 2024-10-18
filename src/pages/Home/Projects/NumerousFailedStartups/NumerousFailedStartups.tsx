import * as S from "./style";
import { Grid } from "@mui/material";
import MavroCover from "../../../../assets/projects/startup/mavro.png";
import NoshCover from "../../../../assets/projects/startup/nosh.png";
import { ColorsEnum } from "../../../../common/theme";
import { StyledLink } from "../../Experiences/style";

export default function NumerousFailedStartups() {
  return (
    <Grid container gap={5}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <S.StyledImage
            src={NoshCover}
            width="100%"
            onClick={() =>
              window.open(
                "https://www.canva.com/design/DAGLMU5WyRM/AHYlgIh16rBkrxAHwbjVZw/edit?utm_content=DAGLMU5WyRM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton/>",
                "_blank",
              )
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.StyledTitle variant="h2"> Nosh </S.StyledTitle>
          <S.StyledSubtitle variant="body2" color={ColorsEnum.darkGrey}>
            {" "}
            Oct 2023{" "}
          </S.StyledSubtitle>
          <S.StyledContent variant="body1" paddingTop="10px">
            Nosh aims to provides a centralised platform for restaurants & food
            suppliers to connect, manage inventories and discover new suppliers.
          </S.StyledContent>
          <br />
          <S.StyledContent variant="body1" paddingTop="10px">
            This idea was funded by Temasek through the
            <StyledLink href="https://enterprise.nus.edu.sg/funding/nus-venture-initiation-programme/">
              {" "}
              NUS VIP Startup Pitch
            </StyledLink>{" "}
            in the{" "}
            <StyledLink href="https://enterprise.nus.edu.sg/education-programmes/nus-overseas-colleges/">
              NUS NOC Norway Startup Programme
            </StyledLink>{" "}
            (💵 $10K). Click on the image to see the pitch deck!
          </S.StyledContent>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <S.StyledImage
            src={MavroCover}
            width="100%"
            onClick={() =>
              window.open(
                "https://docs.google.com/presentation/d/1p-Q043eSIms7jTHLQlusicFQzQW6TFIdD49munCKGaw/edit?usp=sharing",
                "_blank",
              )
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.StyledTitle variant="h2"> Mavro </S.StyledTitle>
          <S.StyledSubtitle variant="body2" color={ColorsEnum.darkGrey}>
            {" "}
            September 2022{" "}
          </S.StyledSubtitle>
          <S.StyledContent variant="body1" paddingTop="10px">
            We envisioned Mavro as a large-scale data mesh that connects
            corporations & individual users alike to the sale and purchase of
            data products. Put simply, we want to build as a data-commerce
            platform, an Amazon for data, and the first of its kind to do so.
            (At least back then~)
          </S.StyledContent>
          <br />
          <S.StyledContent variant="body1" paddingTop="10px">
            This idea was unsuccessfully pitched to the
            <StyledLink href="https://enterprise.nus.edu.sg/funding/nus-venture-initiation-programme/">
              {" "}
              NUS VIP Programme
            </StyledLink>
            . The idea slowly faded away as the workload required to implement
            an MVP conflicted with the goals we were trying to achieve. Click on
            the image to see the pitch deck!
          </S.StyledContent>
        </Grid>
      </Grid>
    </Grid>
  );
}
