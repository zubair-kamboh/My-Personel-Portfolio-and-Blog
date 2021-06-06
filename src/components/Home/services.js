import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    padding: `${theme.spacing(8)}px 0px`,
    margin: `${theme.spacing(8)}px 0px`,
    background: theme.palette.primary.main,
  },

  titleStyles: {
    paddingBottom: theme.spacing(6),
    color: "white",
  },

  cardStyles: {
    background: "#1F426B",
    color: "white",
    padding: theme.spacing(3),
    textAlign: "left",

    "& .MuiTypography-h5": {
      paddingBottom: theme.spacing(1),
    },
    "& .MuiTypography-body1": {
      fontWeight: 300,
    },
  },
}));

const cardContent = [
  {
    title: "React JS Website",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!`,
  },
  {
    title: "Wordpress Website",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!`,
  },
  {
    title: "SEO & Optimization",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio natus corporis sint error nulla culpa quibusdam, hic
                  facilis officia enim possimus molestias quisquam repellendus
                  doloribus earum eaque id! Provident, nostrum!`,
  },
];

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
            {cardContent.map((cardItem) => {
              return (
                <Grid item xs={12} md={4}>
                  <Paper elevation={5} className={classess.cardStyles}>
                    <Typography variant="h5">{cardItem.title}</Typography>
                    <Typography>{cardItem.description}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
