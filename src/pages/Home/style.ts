import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

export const SubTitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "2rem",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  paddingTop: 30,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-evenly",
  },
}));

export const HomeWrapper = styled("div")(({ theme }) => ({
  margin: 0,
  padding: 0,
}));
