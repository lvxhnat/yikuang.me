import * as S from "./style";
import React from "react";

interface ImageListProps {
  title: string;
  url: string;
  [others: string]: any;
}

export default function Image(props: ImageListProps) {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <S.ImageContainer
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => window.open(props.url, "_blank")}
    >
      <S.ImageFixedContainer>
        <S.Image {...props} />
      </S.ImageFixedContainer>
      <S.StyledTypography
        variant="subtitle2"
        align="center"
        justifyContent="flex-end"
        hover={hover}
      >
        {props.title}
      </S.StyledTypography>
    </S.ImageContainer>
  );
}
