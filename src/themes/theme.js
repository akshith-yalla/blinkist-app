import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { grey, cyan, orange } from "@material-ui/core/colors";
import { COLORS } from '../constants';

const defaultTheme = createTheme();

const baseTheme = createTheme({
  container: {
    primary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
    secondary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: orange[500],
    },
    containerPrimary: {
      main: cyan[200],
      light: "#b4ffff",
      dark: "#4bacb8",
    },
    containerSecondary: {
      main: grey[400],
      light: "#f5f5f5",
      dark: "#373737",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: "Raleway, sans-serif"
  },
  overrides: {
		MuiButton: {
			root: {	
				border: "1px solid" + COLORS.ALPHA_PRIMARY_500
			}
		}
	}

});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
