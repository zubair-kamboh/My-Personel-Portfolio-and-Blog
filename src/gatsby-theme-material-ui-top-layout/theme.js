import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
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

export default theme;
