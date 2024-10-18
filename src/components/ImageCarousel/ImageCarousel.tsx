import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as S from "./style";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel(props: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (currentIndex + 2 < props.images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <S.StyledCarouselContainer>
      {currentIndex > 0 && (
        <S.ArrowButton style={{ left: "20px" }} onClick={handlePrev}>
          <ChevronLeftIcon fontSize="small" />
        </S.ArrowButton>
      )}
      <S.Carousel>
        <S.CarouselImages currentIndex={currentIndex}>
          {props.images.map((image: string, index: number) => (
            <S.CarouselImage key={index}>
              <S.CarouselImg src={image} alt={`Slide ${index}`} />
            </S.CarouselImage>
          ))}
        </S.CarouselImages>
      </S.Carousel>
      {currentIndex < props.images.length - 2 && (
        <S.ArrowButton style={{ right: "20px" }} onClick={handleNext}>
          <ChevronRightIcon fontSize="small" />
        </S.ArrowButton>
      )}
    </S.StyledCarouselContainer>
  );
}
