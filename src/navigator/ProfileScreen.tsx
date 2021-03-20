import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'

import LoginScreen from '../ProfileScreenStack/LoginScreen'
import ProfileMainScreen from '../ProfileScreenStack/ProfileMainScreen'
import RegisterScreen from '../ProfileScreenStack/RegisterScreen'

const Stack = createStackNavigator();

class ProfileScreen extends Component {

  static ProfileMainScreenOptions = ()=> {
    let headerTitle = "Tài khoản"
    let headerTitleAlign = 'center'
    let headerTintColor = 'white'
    let headerStyle ={height:70,backgroundColor: '#3b5f8a', opacity:1}
    return {headerTitleAlign, headerTitle, headerTintColor, headerStyle}
  }
  static LoginScreenScreenOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle ={backgroundColor: '#3b5f8a', opacity:1}
    let headerTintColor = 'white'
    let headerTitle = "Đăng nhập"
    let headerRight =()=> (<FontAwesome style={{marginRight:15}} name='search' color='white' size={18}  />)
    return {headerTitleAlign, headerStyle, headerRight, headerTintColor, headerTitle}
  }
  static RegisterScreenScreenOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle ={backgroundColor: '#3b5f8a', opacity:1}
    let headerTintColor = 'white'
    let headerTitle = "Đăng ký tài khoản"
    let headerRight =()=> (<FontAwesome style={{marginRight:15}} name='search' color='white' size={18}  />)
    return {headerTitleAlign, headerStyle, headerRight, headerTintColor, headerTitle}
  }
  render() {
    return (
      <Stack.Navigator
      initialRouteName='ProfileMainScreen'>
        <Stack.Screen name="ProfileMainScreen" component={ProfileMainScreen} options={()=> this.constructor.ProfileMainScreenOptions()}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={()=> this.constructor.LoginScreenScreenOptions()}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={()=> this.constructor.RegisterScreenScreenOptions()}  />
      </Stack.Navigator>
    );
  }
}
export default ProfileScreen