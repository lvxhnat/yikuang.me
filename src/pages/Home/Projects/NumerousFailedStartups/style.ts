import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledImage = styled("img")(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    transform: "scale(1.01)",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: 3,
    fontSize: "0.8rem",
  },
}));

export const StyledContent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));
