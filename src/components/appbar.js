import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, Button, IconButton } from "gatsby-theme-material-ui";
// ICONS
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  socialIcon: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const menuItems = [
  {
    path: "/",
    name: "Home",
  },
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

const Appbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const matches = useMediaQuery("(max-width:780px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Zubair Blog
          </Typography>
          {auth && (
            <div>
              {matches ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {menuItems.map((menuItem, id) => {
                      return (
                        <MenuItem onClick={handleClose} key={id}>
                          <Link underline="none" to={menuItem.path}>
                            {menuItem.name}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </>
              ) : (
                <div
                  style={{
                    width: "40vw",
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  {menuItems.map((menuItem, id) => {
                    return (
                      <Button
                        variant="contained"
                        color="primary"
                        key={id}
                        to={menuItem.path}
                      >
                        {menuItem.name}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          <div className={classes.socialIcon}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://www.linkedin.com/in/zubair-ali-b8281b174/"
              target="_blank"
            >
              <LinkedInIcon style={{ color: "white", fontSize: 30 }} />
            </IconButton>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              to="https://github.com/zubair-kamboh"
              target="_blank"
            >
              <GitHubIcon
                style={{ color: "white", fontSize: 30 }}
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
                style={{ color: "white", fontSize: 30 }}
                fontSize="large"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Appbar;
