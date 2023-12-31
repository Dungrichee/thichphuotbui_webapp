import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...palette,
    },
    typography,
});

export default lightTheme;
