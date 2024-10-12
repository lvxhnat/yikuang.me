import { Button, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const StyledLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "blue",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "1.1rem",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  textTransform: "none",
  minWidth: "200px",
}));

export const StyledButtonWrapper = styled("div")(({ theme }) => ({
  paddingTop: "30px",
  display: "flex",
  justifyContent: "center",
}));

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
