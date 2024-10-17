import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";

interface SocialMediaIconsProps {
  url: string;
  action: "redirect" | "copy";
  icon: React.ReactNode;
}

const SocialMediaIcons = (props: SocialMediaIconsProps) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    if (props.action === "redirect") {
      window.open(props.url, "_blank");
    } else {
      navigator.clipboard.writeText(props.url);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {props.icon}
      </IconButton>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={`${props.url} copied to clipboard!`}
      />
    </>
  );
};

export default SocialMediaIcons;
