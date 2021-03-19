import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen3 from '../screens/Screen3'
import Screen2 from '../screens/Screen2'
const Tab = createMaterialTopTabNavigator()

export default function TopNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        indicatorStyle={{
          color: 'red',
        }}
        tabBarOptions={{
          activeTintColor: '#666',
          indicatorStyle: {
            backgroundColor: '#666',
          },

          labelStyle: {
            fontSize: 16,
            color: '#666',
            textShadowColor: '#999',
            textShadowRadius: 5,
            textShadowOffset: { width: 1, height: 1 },
          },
          style: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen name="Dice" component={Screen3} />
        <Tab.Screen name="Practice" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
