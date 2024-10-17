import { Button, Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BootstrapDialogContent = styled(DialogContent)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: "80%",
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
