import * as S from "./style";
import { StyledLink } from "../Experiences/style";

export default function Footer() {
  return (
    <S.FooterContainer align="center">
      Built by yours truly with ReactJS, MUI in Typescript and deployed on
      Google Compute Engine. Available on Github{" "}
      <StyledLink href="https://github.com/lvxhnat/yikuang.me">
        {" "}
        &nbsp;here{" "}
      </StyledLink>
    </S.FooterContainer>
  );
}
