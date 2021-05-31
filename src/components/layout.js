import * as React from "react";
import ".././Styles/index.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, Button } from "gatsby-theme-material-ui";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import theme from "../gatsby-theme-material-ui-top-layout/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    path: "/services",
    name: "Services",
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

const Layout = ({ pageTitle }) => {
  <title>{pageTitle}</title>;
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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
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
                          color="secondary"
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
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
