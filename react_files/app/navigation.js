import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './index';
import Menu from './menu';
import PasswordRecovery from './passwordRecovery';
import Registration from './registration';
import Info from './info';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={Login} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="passwordRecovery" component={PasswordRecovery} />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
