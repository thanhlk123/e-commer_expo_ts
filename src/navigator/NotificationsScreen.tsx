import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'

import NotifyScreenMain from '../NotifyScreenStack/NotifyScreenMain'

const Stack = createStackNavigator();

export default class NotificationsScreen extends Component {
  static NotifyScreenOptions = ()=> {
    let headerShown  =true
    let headerTitle = "Thông báo"
    let headerTitleAlign = 'center'
    let headerTintColor = 'white'
    let headerStyle = {  backgroundColor: '#3b5f8a', opacity: 1 }
  return {headerShown, headerTitleAlign, headerTitle, headerStyle, headerTintColor}
}
  render() {
    return (
      <Stack.Navigator
      initialRouteName='NotifyScreenMain'
      >
        <Stack.Screen name="NotifyScreenMain" component={NotifyScreenMain} options={()=> this.constructor.NotifyScreenOptions()}  />
      </Stack.Navigator>
    );
  }
}