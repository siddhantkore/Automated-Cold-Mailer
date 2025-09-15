
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A2D2FF',
    },
    secondary: {
      main: '#BDE0FE',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    custom: {
        pink: '#FFC8DD',
        lightPink: '#FFAFCC',
        purple: '#CDB4DB',
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
