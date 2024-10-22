import { Grid, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const ContainerWrapper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(15),
  paddingBottom: 0,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));

export const StyledLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "blue",
}));

export const ImageWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const DynamicImageWrapper = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: 3,
    fontSize: "0.85rem",
  },
}));

export const StyledPosition = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: 5,
    fontSize: "0.9rem",
    color: ColorsEnum.grey,
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "1.1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    listStyleType: "none",
  },
}));

export const InfiniwellContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(10),
  },
}));

export const RazerContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(10),
  },
}));

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontFamily: "Caros, sans-serif",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  paddingBottom: theme.spacing(5),
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
  [theme.breakpoints.down("md")]: {
    width: "50px",
  },
}));

export const Divider1 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "1200px",
  borderLeft: "3px dotted grey",
  marginLeft: "50px",
  marginTop: "-1100px",
  zIndex: -3,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Divider2 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "495px",
  borderLeft: "3px dotted grey",
  marginLeft: "50px",
  marginTop: "-415px",
  zIndex: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
