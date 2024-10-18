import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));
