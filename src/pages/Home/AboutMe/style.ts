import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const ContainerWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: ColorsEnum.white,
  padding: theme.spacing(15),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "2.5rem",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

export const DescriptionWrapper = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  fontFamily: "Caros, sans-serif",
  fontSize: "1.5rem",
  fontWeight: 300,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));
