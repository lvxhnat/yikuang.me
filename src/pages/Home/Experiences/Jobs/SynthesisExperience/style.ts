import { Grid, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Typography)(({ theme }) => ({
  minHeight: "100px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));

export const ImageContainer = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
