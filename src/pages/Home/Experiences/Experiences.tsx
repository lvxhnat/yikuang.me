import * as S from "./style";
import { Grid } from "@mui/material";
import React from "react";
import SynthesisLogo from "../../../assets/logos/experiences/synthesis.png";
import InfiniwellLogo from "../../../assets/logos/experiences/infiniwell.png";
import RazerLogo from "../../../assets/logos/experiences/razer.png";

export default function Experiences() {
  return (
    <Grid container sx={{ padding: 10 }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Experience{" "}
        </S.TitleWrapper>
        <Grid container>
          <Grid item xs={2}>
            <S.Image src={SynthesisLogo} />
          </Grid>
        </Grid>
        <div
          style={{
            width: "2px",
            height: "500px",
            borderLeft: "3px dotted grey",
            marginLeft: "50px",
            marginTop: "-3px",
            zIndex: 0,
          }}
        />
        <Grid container>
          <Grid item xs={2}>
            <S.Image src={InfiniwellLogo} />
          </Grid>
        </Grid>
        <div
          style={{
            width: "2px",
            height: "200px",
            borderLeft: "3px dotted grey",
            marginLeft: "50px",
            marginTop: "-3px",
            zIndex: 0,
          }}
        />
        <Grid container>
          <Grid item xs={2}>
            <S.Image src={RazerLogo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
