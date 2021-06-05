import React from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "gatsby-theme-material-ui";

const hero = () => {
  return (
    <>
      <Box style={{ background: "white" }}>
        <Container component="main">
          <Grid container>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="90vh"
              background="#000"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  textAlign={{ xs: "center", sm: "left" }}
                  paddingTop={{ xs: "3rem", md: "0px" }}
                >
                  <Typography variant="h3">
                    Looking for Hiring a<br />
                    <Box
                      component="span"
                      color="primary.main"
                      fontWeight="bold"
                    >
                      Web Developer?
                    </Box>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ fontSize: "1rem", paddingTop: ".8rem" }}
                  >
                    Get your besiness website up and running today and move your
                    business online
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: "1rem" }}
                    size="large"
                    to="/contact"
                  >
                    Hire me
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <StaticImage
                  src="../../images/web-developer.png"
                  alt="Zubair-Ali-Web-Development-Services"
                />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default hero;