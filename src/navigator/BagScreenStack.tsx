import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import MyBagHomeScreen from '../MyBagStack/MyBagHomeScreen'
import AdressScreen from '../MyBagStack/AddressScreen'
import ConfirmScreen from '../MyBagStack/ConfirmScreen'
import PaymentScreen from '../MyBagStack/PaymentScreen';

const Stack = createStackNavigator();

class CategoriesScreen extends Component {
  constructor(props) {
    super(props)
  }
  CategoriesMainOptions = () => {
    let headerTitleAlign = 'center'
    let headerTitle = 'Categories'
    let headerStyle = {backgroundColor: '#3b5f8a', opacity: 1 }
    let headerTintColor = 'white'
    let headerRight = () => (<FontAwesome style={{ marginRight: 15 }} name='search' color='white' size={18} />)
    return { headerTitleAlign, headerStyle, headerRight, headerTintColor, headerTitle }
  }
  ListCategoriesOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle = {backgroundColor: '#3b5f8a', opacity: 1 }
    let headerTintColor = 'white'
    let headerBackTitleVisible = true
    let headerLeft = () => (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
      >
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>)
    let headerRight = () => (<FontAwesome style={{ marginRight: 15 }} name='search' color='white' size={18} />)
    return { headerTitleAlign, headerStyle, headerRight, headerTintColor, headerBackTitleVisible, headerLeft }
  }
  render() {
    return (
      <Stack.Navigator
        initialRouteName='MyBagHomeScreen'
      >
        <Stack.Screen name="MyBagHomeScreen" component={MyBagHomeScreen} options={() => this.CategoriesMainOptions()}/>
        <Stack.Screen name="AddressScreen" component={AdressScreen} options={() => this.ListCategoriesOptions()} />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} options={() => this.ListCategoriesOptions()}/>
        <Stack.Screen name="PaymentSrceen" component={PaymentScreen} options={() => this.ListCategoriesOptions()} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})
export default CategoriesScreen