import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigations/drawer';

export default function App() {
  return (
    <NavigationContainer>
      < DrawerNavigator />
      </NavigationContainer>
      );
}