import React from "react";
import Layout from "../components/layout";
import Index from "../components/PortfolioCmp/Portfolio/index";
import { Typography, Container, Box } from "@material-ui/core";
import Seo from "../components/seo";

const Portfolio = () => {
  return (
    <>
      <Layout>
        <Seo title="Portfolio" />
        <Container>
          <Typography
            align="center"
            variant="h3"
            style={{ padding: "2rem 0rem" }}
          >
            Portfolio
          </Typography>
          <Box marginBottom="64px">
            <Index />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Portfolio;
