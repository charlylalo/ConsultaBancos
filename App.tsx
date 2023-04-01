/**
 * @description: Cross-platform app for both, Android and iOS that get and display Banks and their data
 *@author: Carlos Eduardo Cabrera Reza
 *
 * @format
 */

import React from 'react';
import BanksList from './src/Screens/BanksList';

function App(): JSX.Element {
  return (
      <>
      <BanksList />
      </>
  );
}

export default App;
