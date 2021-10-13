import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "",
      main: "rgb(6, 34, 42)",
      // main: "#ffffff",
      // dark: "",
      // contrastText: "#ffffff",
    },
    secondary: {
      // light: "",
      main: "#3f51b5",
      // dark: "",
      // contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
  },
});

export default theme;
