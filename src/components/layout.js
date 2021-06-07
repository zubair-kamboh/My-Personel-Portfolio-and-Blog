import * as React from "react";
import AppBar from "./appbar";
import Footer from "./Home/footer";

import Typography from "@material-ui/core/Typography";

// theme
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "../gatsby-theme-material-ui-top-layout/theme";

const Layout = ({ pageTitle, children }) => {
  <title>{pageTitle}</title>;

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
