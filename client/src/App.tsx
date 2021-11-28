import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { ProvideAuth } from './context/useAuth';

import theme from './theme';
import SignIn from './pages/SignIn';

const App : React.FC = () => (
  <div>
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </ProvideAuth>

  </div>
);

export default App;
