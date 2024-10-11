import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "4.5rem",
  fontWeight: 400,
  lineHeight: 1,
}));

export const DescriptionWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "1.2rem",
  fontWeight: 400,
}));

export const StyledButtonWrapper = styled("div")(({ theme }) => ({
  paddingTop: "50px",
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1.1rem",
  backgroundColor: ColorsEnum.coffee,
}));
