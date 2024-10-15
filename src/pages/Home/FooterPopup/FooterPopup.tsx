import { ColorsEnum } from "../../../common/theme";
import * as S from "./style";
import { Link, Typography } from "@mui/material";
import Coffee from "../../../assets/coffee.png";

const FooterPopup: React.FC = () => {
  return (
    <Link href="https://cal.com/yikuang" style={{ color: ColorsEnum.darkGrey }}>
      <S.FooterPopupWrapper>
        <Typography
          variant="body1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          align="center"
          width="100%"
          color={ColorsEnum.white}
        >
          <img src={Coffee} height="50px" />
          Lets Get A Coffee!
        </Typography>
      </S.FooterPopupWrapper>
    </Link>
  );
};

export default FooterPopup;
