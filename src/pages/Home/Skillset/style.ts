import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorsEnum } from "../../../common/theme";

export const SkillsetContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10),
  backgroundColor: ColorsEnum.white,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
  },
}));
