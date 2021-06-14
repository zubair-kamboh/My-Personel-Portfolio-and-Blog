import React from "react";
import { Typography, Grid, Box, makeStyles, Divider } from "@material-ui/core";
import { Button, IconButton } from "gatsby-theme-material-ui";

// ICONS
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Twitter } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    marginTop: theme.spacing(2),
  },

  titleStyles: {
    padding: `${theme.spacing(2)}px 0px`,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  socialIcon: {
    display: "flex",
    justifyContent: "center",
  },
}));

const menuItems = [
  {
    path: "/blog",
    name: "Blog",
  },

  {
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Grid container>
        <Grid item xs={0} md={1} />
        <Grid item sm={10} md={4} lg={4}>
          <Box>
            <Typography
              className={classes.titleStyles}
              color="primary"
              variant="h4"
            >
              Zubair Ali Blog
            </Typography>
            <Typography>
              We’re a full-time web development service provider with over 3
              years of combined experience, founded and run by Zubair Ali. We
              create web products for the help and growth of your business.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography
            variant="h5"
            className={classes.titleStyles}
            align="center"
          >
            Navigate
          </Typography>
          <Box display="flex" flexDirection="column">
            {menuItems.map((menuItem, id) => {
              return (
                <Button key={id} size="small" to={menuItem.path}>
                  {menuItem.name}
                </Button>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography
            variant="h5"
            className={classes.titleStyles}
            align="center"
          >
            Follow
          </Typography>
          <div className={classes.socialIcon}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://www.linkedin.com/in/zubair-ali-b8281b174/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 30 }} color="primary" />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://github.com/zubair-kamboh"
              target="_blank"
            >
              <GitHubIcon
                style={{ fontSize: 30 }}
                color="primary"
                fontSize="large"
              />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://www.facebook.com/zubair.kamboh.144/"
              target="_blank"
            >
              <FacebookIcon
                style={{ fontSize: 30 }}
                color="primary"
                fontSize="large"
              />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://twitter.com/Zubairkamboh901"
              target="_blank"
            >
              <Twitter
                style={{ fontSize: 30 }}
                color="primary"
                fontSize="large"
              />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </>
  );
};

export default Footer;
