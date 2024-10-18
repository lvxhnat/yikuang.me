import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "280px",
}));
