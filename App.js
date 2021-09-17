import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Task from './src/pages/Task'
import Details from './src/pages/Details'
import NewTask from './src/pages/NewTask'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerTintColor:"#f92e6a"
          }}
        />

        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor:"#f92e6a"
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor:"#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}