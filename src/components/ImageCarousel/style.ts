import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { ColorsEnum } from "../../common/theme";

// Styled components for the carousel
export const StyledCarouselContainer = styled("div")({
  position: "relative",
  width: "100%",
  overflow: "hidden",
});

export const ArrowButton = styled("div")({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: ColorsEnum.white,
  border: "none",
  padding: "8px",
  cursor: "pointer",
  zIndex: 1,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Carousel = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
});

export const CarouselImage = styled("div")(({ theme }) => ({
  flex: "0 0 50%", // Adjust based on the number of images shown
  boxSizing: "border-box",
  padding: "0 5px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flex: "0 0 100%", // Adjust based on the number of images shown
  },
}));

interface CarouselImagesProps {
  currentIndex: number;
}

export const CarouselImages = styled("div")<CarouselImagesProps>(
  ({ theme, currentIndex }) => ({
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${(currentIndex / 2) * 100}%)`,
    [theme.breakpoints.down("md")]: {
      transform: `translateX(-${currentIndex * 100}%)`,
    },
  }),
);

export const CarouselImg = styled("img")({
  width: "100%",
  height: "100%", // Make image fill the container's height
  objectFit: "contain", // Maintain aspect ratio and cover the container
  display: "block",
});
