import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const SubTitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "2rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  paddingTop: 30,
}));

export const Image = styled("img")(({ theme }) => ({
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
