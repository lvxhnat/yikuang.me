import * as React from "react";
import * as S from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProjectCardProps {
  image: string
  title: string
  description: string
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <S.StyledCard>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </S.StyledCard>
  );
}
