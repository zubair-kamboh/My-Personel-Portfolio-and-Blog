import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  sectionStyles: {
    padding: `${theme.spacing(8)}px 0px`,
  },
  aboutme: {
    paddingBottom: theme.spacing(3),
  },

  imgContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="section" className={classes.sectionStyles}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            color="primary"
            align="center"
            className={classes.aboutme}
          >
            About me
          </Typography>
          <Grid container className={classes.imgContainerStyle}>
            <Grid item xs={12} md={6}>
              <StaticImage
                src="../../images/zubair-picture.png"
                alt="zubair-ali-best-web-remote-service-provider"
                width={300}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography>
                  I'm Zubair{" "}
                  <span role="img" aria-label="Qualified Web Develop">
                    ✅
                  </span>{" "}
                  A PROFESSIONAL FRONT END WEBSITE DEVELOPER specializing in
                  Javascript, React.Js, and the Front end technologies.
                  Extensive Experience as a Wordpress Php development
                  methodically identifying and resolving complex underlying
                  website problems, using a vast variety of tools and
                  techniques. I have solved numerous wordpress and code
                  Performance issues such as Speed Optimization, SEO, as well as
                  often re-engineered immensely complex designs and code,
                  providing significantly improved performance.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
