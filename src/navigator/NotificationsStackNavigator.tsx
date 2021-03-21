import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import NotifyScreenMain from '@screens/notificationsStackScreen/NotifyScreenMain'

const Stack = createStackNavigator();

export const NotificationsStackNavigator = () => {
  const  notifyScreenOptions = ()=> {
    let headerShown  =true
    let headerTitle = "Thông báo"
    let headerTintColor = 'white'
    let headerStyle = {  backgroundColor: '#3b5f8a', opacity: 1 }
  return {headerShown, headerTitle, headerStyle, headerTintColor}
}
    return (
      <Stack.Navigator initialRouteName="NotifyScreenMain">
        <Stack.Screen
          name="NotifyScreenMain"
          component={NotifyScreenMain}
          options={notifyScreenOptions()}
        />
      </Stack.Navigator>
    );
  }