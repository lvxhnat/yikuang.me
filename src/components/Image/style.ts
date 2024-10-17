import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Image = styled("img")(({ theme }) => ({
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const ImageFixedContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80px",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  height: "110px",
  width: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
}));

interface StyledTypographyProps {
  hover: boolean;
}
export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ theme, hover }) => ({
    minHeight: 0,
    opacity: hover ? 1 : 0, // Control visibility based on hover prop
    transition: "opacity 0.5s ease-in-out", // Smooth fade-in and fade-out effect
    color: hover ? "black" : "grey",
    fontFamily: "Caros, sans-serif",
  }),
);
