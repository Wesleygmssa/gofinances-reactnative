import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { CategorySelect } from './src/screens/CategorySelect';
import { ThemeProvider } from 'styled-components'
import Theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={Theme}>
      <CategorySelect />
    </ThemeProvider>
  );
}


