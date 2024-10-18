import * as React from "react";
import * as S from "./style";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {
  BootstrapDialog,
  BootstrapDialogContent,
} from "../../../../components/ReadmorePopup/style";
import { Chip, DialogTitle, IconButton } from "@mui/material";
import { ColorsEnum } from "../../../../common/theme";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  dialogContent: any;
  category: "Project" | "Others";
  redirectURL?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const chipContent = {
    Project: ColorsEnum.machoBlue,
    Others: ColorsEnum.darkGrey,
  };

  return (
    <React.Fragment>
      <S.StyledCard
        onClick={() =>
          props.redirectURL
            ? window.open(props.redirectURL, "_blank")
            : setOpen(true)
        }
      >
        <CardMedia
          component="img"
          height="100%"
          image={props.image}
          style={{ maxHeight: "250px" }}
        />
        <S.StyledCardContent>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.StyledTitle gutterBottom variant="h5">
                {props.title}
              </S.StyledTitle>
              <S.StyledChip
                label={props.category}
                variant="filled"
                style={{
                  backgroundColor: chipContent[props.category],
                }}
              />
            </div>
            <S.StyledSubtitle variant="body1">
              {props.subtitle}
            </S.StyledSubtitle>
          </div>
          <S.StyledSubtitle variant="body2" sx={{ color: "text.secondary" }}>
            {props.description}
          </S.StyledSubtitle>
        </S.StyledCardContent>
      </S.StyledCard>

      <BootstrapDialog onClose={() => setOpen(false)} open={open} fullWidth>
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h5">{props.title}</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <BootstrapDialogContent dividers>
          {props.dialogContent}
        </BootstrapDialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
