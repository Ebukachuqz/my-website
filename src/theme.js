import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      md1: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  //   palette: {
  //     primary: {
  //       main: "#003580",
  //     },
  //   },
  //   typography: {
  //     fontWeightVeryBold: 900,
  //   },
});

export default theme;
