import React from "react";
import * as S from "./style";
import Homebar from "../../components/Homebar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset/Skillset";
import Experiences from "./Experiences";
import Projects from "./Projects";

export default function Home() {
  console.log(
    "%c Welcome to My Website! 🎉",
    "color: #4CAF50; font-size: 20px; font-weight: bold;",
    "\n",
  );

  return (
    <S.HomeWrapper>
      <Homebar />
      <Introduction />
      <AboutMe />
      <Skillset />
      <Experiences />
      <Projects />
    </S.HomeWrapper>
  );
}
