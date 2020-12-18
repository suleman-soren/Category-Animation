import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarContent from './src/screen/TabBarContent';

import Home from './src/screen/Home';
import Category from './src/screen/Category';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator tabBar={props => <TabBarContent {...props} />} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}

export default App;