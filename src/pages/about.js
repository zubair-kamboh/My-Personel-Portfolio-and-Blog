import * as React from "react";
import Layout from "../components/layout";
import Img from "../images/lake.jpg";
import { Typography, Box, Container, makeStyles } from "@material-ui/core";
import Seo from "../components/seo";

const useStyles = makeStyles((theme) => ({
  sectionStyles: {
    padding: `${theme.spacing(10)}px ${theme.spacing(1)}px`,
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Img})`,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundPosition: "contain",
    backgroundAttachment: "fixed",
  },

  headingStyles: {
    textAlign: "center",
  },

  paragraphStyles: {
    marginTop: `${theme.spacing(2)}px 0px`,
    fontSize: "1.1rem",
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title="About Me" />
      <Box component="section" className={classes.sectionStyles}>
        <Container maxWidth="md">
          <Typography variant="h2" className={classes.headingStyles}>
            A BIT MORE ABOUT US
          </Typography>
          <Typography align="center" className={classes.paragraphStyles}>
            it is our mission to help the small to medium folks succeed.
          </Typography>
        </Container>

        <Container maxWidth="md">
          <Typography
            variant="h3"
            className={classes.headingStyles}
            style={{ margin: "96px 0px 24px 0px" }}
          >
            Our mission
          </Typography>

          <Box>
            <Typography className={classes.paragraphStyles}>
              Hey, we’re a full-time web development service provider with over
              3 years of combined experience, founded and run by Zubair Ali.
              Tired of the corporate rat race, We are on a mission to help
              small/medium scale business owners to assist them to grow their
              business online. We aren't compromising on our strong passion to
              help businesses succeed.
              <br />
              <br />
              We’re a straight-talking, no-nonsense bunch who just want to
              deliver the best websites projects for you. We aren’t order takers
              or mechanical. We are partners and collaborators. We will listen
              to you, and understand your goals and problems to effectively
              craft and execute your business strategies, so you can carry on
              doing whatever you want.
              <br />
              <br /> We are Pakistan Based service provider, and even
              internationally. So come, pull up a branch, and let’s chirp about
              what you need right now.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
