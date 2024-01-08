import React from "react";

import { Button } from "container/Button";

interface HomePros {
  children?: any;
}

export const Home = ({ children }: HomePros) => {
  return (
    <div id="container">
      <h6>Container from Counter</h6>
      <Button name={"Ola"} variant={"contained"}></Button>
      {children}
    </div>
  );
};
