import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const Image = styled("img")(({ theme }) => ({
  border: `2px solid ${ColorsEnum.lightGrey}`,
  borderRadius: "100%",
  width: "100px",
  boxShadow: "0px 0px 20px 5px rgba(200, 200, 200, 0.8)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
  },
}));
