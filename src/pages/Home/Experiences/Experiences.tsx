import * as S from "./style";
import * as React from "react";
import InfiniwellLogo from "../../../assets/logos/experiences/infiniwell.png";
import RazerLogo from "../../../assets/logos/experiences/razer.png";
import { Grid } from "@mui/material";
import SynthesisExperience from "./Jobs";

interface ExperiencesProps {
  [others: string]: any;
}

function Experiences(props: ExperiencesProps, ref: any) {
  return (
    <Grid ref={ref} container sx={{ padding: 10 }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Experience{" "}
        </S.TitleWrapper>
        <SynthesisExperience />
        <div
          style={{
            width: "2px",
            height: "1000px",
            borderLeft: "3px dotted grey",
            marginLeft: "50px",
            marginTop: "-925px",
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

export default React.forwardRef(Experiences);
