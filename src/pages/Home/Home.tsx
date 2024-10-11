import React from "react";
import * as S from "./style";
import Homebar from "../../components/Homebar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset/Skillset";

export default function Home() {
  return (
    <S.HomeWrapper>
      <Homebar />
      <Introduction />
      <AboutMe />
      <Skillset />
    </S.HomeWrapper>
  );
}
