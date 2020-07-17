import React from 'react';
import { ThemeProvider } from 'styled-components';

import Title from '@components/Title';

import GlobalStyles from './styles/global';
import mainTheme from './styles/themes/main';

const App: React.FC = () => (
  <ThemeProvider theme={mainTheme}>
    <Title />

    <GlobalStyles />
  </ThemeProvider>
);

export default App;
