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

export const Divider1 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "1000px",
  borderLeft: "3px dotted grey",
  marginLeft: "50px",
  marginTop: "-925px",
  zIndex: 0,
}));
export const Divider2 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "500px",
  borderLeft: "3px dotted grey",
  marginLeft: "50px",
  marginTop: "-420px",
  zIndex: 0,
}));
