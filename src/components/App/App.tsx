import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from '../../utils';
import DashboardPage from '../Pages/Dashboard/DashboardPage';

const App: FunctionComponent<{}> = () => {
  const theme = useTypedSelector((state) => state.app.theme);

  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

export default App;
