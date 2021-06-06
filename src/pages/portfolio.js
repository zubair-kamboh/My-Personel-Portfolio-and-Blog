import React from "react";
import Layout from "../components/layout";
import Index from "../components/Services/Portfolio/index";
import { Typography, Container } from "@material-ui/core";

const Portfolio = () => {
  return (
    <>
      <Layout pageTitle="Portfolio" />
      <Container>
        <Typography
          align="center"
          variant="h3"
          style={{ padding: "2rem 0rem" }}
        >
          Portfolio
        </Typography>

        <Index />
      </Container>
    </>
  );
};

export default Portfolio;