import { AppBar, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  my: 2,
  color: "black",
  display: "block",
  textTransform: "none",
  "&:hover": { backgroundColor: "transparent" },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  position: "static",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  gap: theme.spacing(10),
  marginRight: 30,
  display: "flex",
}));
