import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  my: 2,
  color: "black",
  display: "block",
  textTransform: "none",
  "&:hover": { backgroundColor: "transparent" },
}));
