import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import CategoriesMainScreen from '../CategoriesStack/CategoriesMainScreen'
import ListCategoriesScreen from '../CategoriesStack/ListCategoriesScreen'
import ProductDetailScreen from '../CategoriesStack/ProductDetailScreen'

const Stack = createStackNavigator();

class CategoriesScreen extends Component {
  constructor(props) {
    super(props)
  }
  CategoriesMainOptions = () => {
    let headerTitleAlign = 'center'
    let headerTitle = 'Categories'
    let headerStyle = { backgroundColor: '#3b5f8a', opacity: 1 }
    let headerTintColor = 'white'
    let headerRight = () => (<FontAwesome style={{ marginRight: 15 }} name='search' color='white' size={18} />)
    return { headerTitleAlign, headerStyle, headerRight, headerTintColor, headerTitle }
  }
  ListCategoriesOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle = { backgroundColor: '#3b5f8a', opacity: 1 }
    let headerTintColor = 'white'
    let headerBackTitleVisible = true
    let headerLeft = () => (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
      >
        <Ionicons style={{ paddingLeft: 20 }} name="md-arrow-back" size={24} color="white" />
      </TouchableOpacity>)

    let headerRight = () => (<FontAwesome style={{ marginRight: 15 }} name='search' color='white' size={18} />)
    return { headerTitleAlign, headerStyle, headerRight, headerTintColor, headerBackTitleVisible, headerLeft }
  }
  ProducDetailOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle = { backgroundColor: '#3b5f8a', opacity: 1 }
    let headerTintColor = 'white'
    let headerBackTitleVisible = true
    let headerLeft = () => (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
      >
        <Ionicons style={{ paddingLeft: 20 }} name="md-arrow-back" size={24} color="white" />
      </TouchableOpacity>)

    let headerRight = () => (<FontAwesome style={{ marginRight: 15 }} name='search' color='white' size={18} />)
    return { headerTitleAlign, headerStyle, headerRight, headerTintColor, headerBackTitleVisible, headerLeft }
  }
  render() {
    return (
      <Stack.Navigator
        initialRouteName='CategoriesMain'
      >
        <Stack.Screen name="CategoriesMain" component={CategoriesMainScreen} options={() => this.CategoriesMainOptions()} />
        <Stack.Screen name="ListCategories" component={ListCategoriesScreen} options={() => this.ListCategoriesOptions()} />
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} options={() => this.ListCategoriesOptions()} />
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