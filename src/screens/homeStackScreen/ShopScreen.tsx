import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions, View, Animated, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Topic from '../components/Topic'

const { width, height } = Dimensions.get('screen');

const List = [
  {
    id: '1',
    title: 'TopWear',
    item: ['T-Shirts', 'Casual Shirts', 'Formal Shirt']
  },
  {
    id: '2',
    title: 'BottomWear',
    item: ['Jeans', 'Casual Trousers', 'Shorts', 'Track Pants']
  },
  {
    id: '3',
    title: 'Sports & Active Wear',
    item: ['Active T-Shirts', 'Track Pants', 'Sport Pants']
  },
  {
    id: '4',
    title: 'Indian & Festive Wear',
    item: ['Active T-Shirts', 'Track Pants', 'Sport Pants']
  },
  {
    id: '5',
    title: 'Plus Size',
    item: ['Active T-Shirts', 'Track Pants', 'Sport Pants']
  },
  {
    id: '6',
    title: 'Shoes',
    item: ['Active T-Shirts', 'Track Pants', 'Sport Pants']
  },

]

class ShopScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={[{ width: width },styles.center]}>
            <TouchableOpacity style={[{ width: width*0.8 },styles.center]}
              onPress={()=>{this.props.navigation.navigate('Categories',{screen:'ListCategories'})}}
            >
              <Image
                source={require('../images/shops/shop1.jpg')}
                style={styles.imgShop}
              />
              <Text style={styles.shopName}>Winter Style Sorted</Text>
              <Text style={styles.shopSlogan}>Hand-Picked Authenticity</Text>
            </TouchableOpacity>
          </View>
          <View>
            {List.map(item => {
              return (
                <Topic title={item.title} key={item.id}>
                  {item.item.map(data => {
                    return (
                      <TouchableOpacity style={[styles.itemButton, styles.center]} key={data}>
                        <Text style={styles.itemText}>{data}</Text>
                        <AntDesign name='right' size={10} />
                      </TouchableOpacity>
                    )
                  })}
                </Topic>)
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  imgShop: { 
    width: "100%", 
    height: width*0.7 },
  shopName:{
    fontWeight:'bold', 
    fontSize:15, 
    padding:7},
  shopSlogan: {
    color:'grey', 
    fontSize:11},
  itemButton: { 
    flexDirection: 'row', 
    marginLeft:10, 
    padding:10,
    paddingRight:5, 
    borderBottomWidth:0.5, 
    borderBottomColor:'#c9b7b7' },
  itemText: {
    flex:1, 
    fontSize:14, 
    padding: 2},
    anotherHeader:{
      height:24, 
      width:'100%',
      position:'absolute',
      top:0,
      zIndex:100,
      backgroundColor:'yellow'
    }

});
export default ShopScreen