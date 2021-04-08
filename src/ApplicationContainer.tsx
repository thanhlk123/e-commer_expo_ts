import React from 'react';
import {ThemeProvider} from 'styled-components';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
// import AppNavigator from '@navigator/AppNavigator';
import AppNavigator from "@navigator/index";

function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5b3a70",
    accent: "#50c878",
    background: "#f7f9fb",
  },
};

export default App;
