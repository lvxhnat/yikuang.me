import React from "react";
import * as S from "./style";
import Homebar from "./Homebar";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skillset from "./Skillset/Skillset";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Footer from "./Footer";
import FooterPopup from "./FooterPopup";

export default function Home() {
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const experiencesRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);

  console.log(
    "%c Welcome to My Website! 🎉",
    "color: #4CAF50; font-size: 20px; font-weight: bold;",
    "\n",
  );

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("ref.current is null or undefined");
    }
  };

  return (
    <S.HomeWrapper>
      <Homebar
        projectsRef={() => scrollToRef(projectsRef)}
        experiencesRef={() => scrollToRef(experiencesRef)}
        skillsRef={() => scrollToRef(skillsRef)}
      />
      <Introduction />
      <AboutMe />
      <Experiences ref={experiencesRef} />
      <Projects ref={projectsRef} />
      <Footer />
      <FooterPopup />
      <Skillset ref={skillsRef} />
    </S.HomeWrapper>
  );
}
