import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const IntroductionContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10),
  paddingTop: 0,
  maxHeight: "800px",
  paddingBottom: theme.spacing(15),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));

export const ProfileContainerWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(12),
  },
}));

export const Image = styled("img")(({ theme }) => ({
  height: "600px",
  position: "absolute",
  marginTop: -515,
  marginLeft: 100,
  [theme.breakpoints.down("md")]: {
    height: "350px",
    marginLeft: 10,
  },
}));

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "4.5rem",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
}));

export const SocialMediaWrapper = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(30),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(45),
    display: "flex",
    justifyContent: "center",
  },
}));

export const DescriptionWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "1.2rem",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const StyledButtonWrapper = styled("div")(({ theme }) => ({
  paddingTop: "50px",
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1.1rem",
  backgroundColor: ColorsEnum.coffee,
}));
