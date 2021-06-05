import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  makeStyles,
  Paper,
  CardActions,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    padding: `${theme.spacing(8)}px 0px`,
    margin: `${theme.spacing(8)}px 0px`,
    background: "#333333",
  },

  titleStyles: {
    paddingBottom: theme.spacing(6),
    color: "white",
  },

  cardStyles: {},
}));

const Services = () => {
  const classess = useStyles();
  return (
    <>
      <Box className={classess.containerStyles} textAlign="center">
        <Container>
          <Typography className={classess.titleStyles} variant="h3">
            My Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper>
                <Typography variant="h6">React JS Website</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Typography variant="h6">Wordpress Website</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Typography variant="h6">Seo & Optimization</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
