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
    description: `✅ Single page application using Reactjs, Gatsby headless CMS, Nextjs and Material UI, Clean Code, 100% SEO friendly, Lightning fast and incredible UI/UX design and wondersful User Experience`,
  },
  {
    title: "Wordpress Website",
    description: `✅ Wordpress theme development, custom coded php website. Modern landing page. Professional and Responsive site. Safe and secure dynamic web content using php, jquery and javascript.`,
  },
  {
    title: "SEO & Optimization",
    description: `✅ Seo optimized website with fast response rate. 90%+ score on Google Page Speed insights. Content optimization, Speed optimization, On Page/Off page SEO, meta tags, Yoast SEO and much more`,
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
            {cardContent.map((cardItem, id) => {
              return (
                <Grid item xs={12} md={4} key={id}>
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
