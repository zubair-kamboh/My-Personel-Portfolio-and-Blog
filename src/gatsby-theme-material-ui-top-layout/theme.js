import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1B4D89",
    },
    secondary: {
      main: "#2F80ED",
    },
    info: {
      main: "#000",
    },
    type: "light",
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"],
  },
});

theme = responsiveFontSizes(theme);

export default theme;
