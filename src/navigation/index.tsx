import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlarmListScreen from '../screens/AlarmListScreen';
import DetailsScreen from '../screens/DetailsScreen';

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AlarmListScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}