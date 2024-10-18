import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { CardContent, Chip, Typography } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "500px",
  display: "flex", // Make the card a flex container
  flexDirection: "column", // Stack its children vertically
  "&:hover": {
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    transform: "scale(1.01)",
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    flex: 1,
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

export const StyledChip = styled(Chip)(({ theme }) => ({
  width: "100px",
  color: ColorsEnum.white,
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
    height: "25px",
  },
}));
