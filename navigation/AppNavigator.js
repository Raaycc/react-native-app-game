import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHome from '../screens/AppHome';
import Jogar from '../screens/Jogar';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AppInicio:AppHome,
  Main: MainTabNavigator,
  Jogar: Jogar
  
}));