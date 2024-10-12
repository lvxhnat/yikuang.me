import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const SubTitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "2rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
  paddingTop: 30,
}));

export const HomeWrapper = styled("div")(({ theme }) => ({
  margin: 0,
  padding: 0,
}));
