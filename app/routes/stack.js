import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabTwoScreen from '../(tabs)/editar'; 
import EditarTwo from '../(tabs)/EditarTwo';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="TabTwo">
      <Stack.Screen name="TabTwo" component={TabTwoScreen} />
      <Stack.Screen name="EditarTwo" component={EditarTwo} />
    </Stack.Navigator>
  );
};

export default Navigation;