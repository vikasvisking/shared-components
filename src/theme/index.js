
import { useMemo } from 'react';
// material
import { CssBaseline } from '@material-ui/core';
//
import { createTheme } from '@material-ui/core/styles';
import shape from './shape';
import palette from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

const makeTheme = () => {
  const original = createTheme();
  return {
    ...original,
    shadows: [ ...shadows, ],
    customShadows: customShadows,
    palette: palette,
    shape: shape,
    typography: typography
  };
};

const theme = makeTheme();
theme.components = componentsOverride(theme);

export default theme;