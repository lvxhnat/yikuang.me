import { Grid, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Typography)(({ theme }) => ({
  minHeight: "100px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));
