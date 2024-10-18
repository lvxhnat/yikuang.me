import React from "react";
import * as S from "./style";
import { StyledLink } from "../Experiences/style";

export default function Footer() {
  return (
    <S.FooterContainer align="center">
      Built by yours truly with ReactJS, MUI and deployed using Google Compute
      Engine, and written in Typescript. Available on Github{" "}
      <StyledLink href="https://github.com/lvxhnat/yikuang.me">
        {" "}
        here{" "}
      </StyledLink>
    </S.FooterContainer>
  );
}
