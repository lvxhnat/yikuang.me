import * as S from "./style";
import * as React from "react";
import {
  SynthesisExperience,
  InfiniwellExperience,
  RazerExperience,
} from "./Jobs";

interface ExperiencesProps {
  [others: string]: any;
}

function Experiences(props: ExperiencesProps, ref: any) {
  return (
    <S.ContainerWrapper
      ref={ref}
      container
      sx={{ padding: 10, paddingBottom: 0 }}
    >
      <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
        {" "}
        Experience{" "}
      </S.TitleWrapper>
      <SynthesisExperience />
      <S.Divider1 />
      <InfiniwellExperience />
      <S.Divider2 />
      <RazerExperience />
    </S.ContainerWrapper>
  );
}

export default React.forwardRef(Experiences);
