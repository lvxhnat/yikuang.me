import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(15),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));

export const StyledProjectContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  spacing: 10,
  [theme.breakpoints.down("md")]: {},
}));
