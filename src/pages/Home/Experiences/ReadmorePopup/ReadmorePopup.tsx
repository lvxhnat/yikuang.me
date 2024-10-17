import * as React from "react";
import * as S from "./style";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

interface ReadmorePopupProps {
  title: string;
  dialogContent: any;
}

export default function ReadmorePopup(props: ReadmorePopupProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <S.StyledButtonWrapper>
        <S.StyledButton variant="contained" onClick={handleClickOpen}>
          <Typography variant="body1">Tell me more!</Typography>
        </S.StyledButton>
      </S.StyledButtonWrapper>
      <S.BootstrapDialog onClose={handleClose} open={open} fullWidth>
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h5">{props.title}</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <S.BootstrapDialogContent dividers>
          {props.dialogContent}
        </S.BootstrapDialogContent>
      </S.BootstrapDialog>
    </React.Fragment>
  );
}
