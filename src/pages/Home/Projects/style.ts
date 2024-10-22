import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));

export const ContainerWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(15),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));
