import * as S from "./style";
import * as React from "react";
import { Grid } from "@mui/material";
import {SynthesisExperience, InfiniwellExperience, RazerExperience} from "./Jobs";

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
        <InfiniwellExperience />
        <div
          style={{
            width: "2px",
            height: "500px",
            borderLeft: "3px dotted grey",
            marginLeft: "50px",
            marginTop: "-420px",
            zIndex: 0,
          }}
        />
        <RazerExperience />
      </Grid>
    </Grid>
  );
}

export default React.forwardRef(Experiences);
