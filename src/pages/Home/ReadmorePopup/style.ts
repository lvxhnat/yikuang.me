import { Button, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  width: "100%",
  minHeight: "300px",
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: "80%",
    maxHeight: "none",
    overflowX: "hidden",
  },
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
