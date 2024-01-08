import React from "react";
import { Button as MatButton } from "@mui/material";

type TVariant = "text" | "contained" | "outlined";

interface ButtonProps {
  name: string;
  variant: TVariant;
}

export const Button = ({ name, variant }: ButtonProps) => {
  function handleButtonClick() {
    alert("Clicked");
  }

  return (
    <MatButton variant={variant} onClick={handleButtonClick}>
      {name}
    </MatButton>
  );
};
