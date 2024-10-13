import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ColorsEnum } from "../../../common/theme";

export const FooterPopupWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  left: 20,
  margin: 0,
  padding: theme.spacing(1),
  paddingLeft: 0,
  opacity: "60%",
  backgroundColor: ColorsEnum.oldschoolOrange,
  borderRadius: 10,
  width: 200,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifycontent: "center",
  gap: 1,
  transition: "0.5s",
  "&:hover": {
    boxShadow: 5,
    transform: 1.5,
    cursor: "pointer",
    opacity: "100%",
  },
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));