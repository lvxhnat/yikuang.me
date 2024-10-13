import * as React from "react";
import * as S from "./style";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 20,
              marginRight: 30,
            }}
          >
            <S.StyledButton onClick={props.skillsRef}>
              <Typography variant="body1"> Skills</Typography>
            </S.StyledButton>
            <S.StyledButton onClick={props.experiencesRef}>
              <Typography variant="body1"> Experiences</Typography>
            </S.StyledButton>
            <S.StyledButton onClick={props.projectsRef}>
              <Typography variant="body1"> Projects</Typography>
            </S.StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
