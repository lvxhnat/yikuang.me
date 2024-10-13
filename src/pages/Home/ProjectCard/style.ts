import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  "&:hover": {
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    transform: "scale(1.01)"
  }
}));