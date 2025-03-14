import * as React from "react";
import * as S from "./style";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

interface HomebarProps {
  skillsRef: any;
  experiencesRef: any;
  projectsRef: any;
}
export default function Homebar(props: HomebarProps) {
  return (
    <S.StyledAppBar>
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters>
          <S.StyledBox>
            <S.StyledButton onClick={props.experiencesRef}>
              <Typography variant="body1"> Experiences</Typography>
            </S.StyledButton>
            <S.StyledButton onClick={props.projectsRef}>
              <Typography variant="body1"> Projects</Typography>
            </S.StyledButton>
            <S.StyledButton onClick={props.skillsRef}>
              <Typography variant="body1"> Skills</Typography>
            </S.StyledButton>
          </S.StyledBox>
        </Toolbar>
      </Container>
    </S.StyledAppBar>
  );
}
