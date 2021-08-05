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
  typography: {
    fontFamily: "Raleway, sans-serif"

  },
  overrides: {
    MuiTypography: {
			root: {	
        fontFamily: "Raleway, sans-serif"
			}
		}
	}

});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
