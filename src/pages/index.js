import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/Home/hero";
import AboutMe from "../components/Home/aboutMe";
import Services from "../components/Home/services";
import Index from "../components/Services/Portfolio/index";
import Contact from "../components/Home/contact";

import {
  CssBaseline,
  Typography,
  Container,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TypographyStyles: {
    paddingBottom: theme.spacing(6),
    color: theme.palette.primary.main,
  },

  ContainerStyles: {
    margin: `${theme.spacing(8)}px 0px`,
    padding: `${theme.spacing(8)}px 0px`,
  },
}));

const IndexPage = () => {
  const classess = useStyles();
  return (
    <>
      <Layout pageTitle="Home Page">
        <Hero />
        <AboutMe />
        <Services />

        {/* Portfolio Section */}
        <Box className={classess.ContainerStyles}>
          <Container>
            <Typography
              align="center"
              variant="h3"
              className={classess.TypographyStyles}
            >
              Portfolio
            </Typography>
            <Index />
          </Container>
        </Box>

        {/* Contact Form */}
        <Contact />
        <CssBaseline />
      </Layout>
    </>
  );
};

export default IndexPage;
