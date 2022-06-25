import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Container } from "@mui/material";
const MainComponent = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default MainComponent;
