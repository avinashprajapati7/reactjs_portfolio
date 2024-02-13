import { createTheme } from '@mui/material/styles';

const customTheme = () =>
  createTheme({
    typography: {
      // fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto`,
      fontFamily: 'Poppins,sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      button: {
        textTransform: 'none',
      },
    },
  });

export default customTheme;
