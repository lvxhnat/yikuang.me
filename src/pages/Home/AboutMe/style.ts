import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "2.5rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const DescriptionWrapper = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  fontFamily: "Caros, sans-serif",
  fontSize: "1.5rem",
  fontWeight: 300,
}));
