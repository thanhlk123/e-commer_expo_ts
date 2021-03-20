import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import Topic from '../components/Topic'
import { AntDesign } from '@expo/vector-icons'
import TrendingsData from '../Datas/Trendings'
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen')

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

const ItemJustIn = (item) => {
  return (
    <View>
      <TouchableOpacity >
        <View style={[styles.junsInItem, styles.centerItem]}>
          <Image source={item.img}
            style={styles.trendingImg}
            resizeMode="cover" />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingDetails}>{item.details}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const RenderJustIn = () => {
  return (
    <View style={[styles.justInContainer, styles.shadowStyle]}>
      <View style={[{ paddingVertical: 10, paddingHorizontal: 15, width: width, justifyContent: 'space-between', flexDirection: 'row' }, styles.marginL]}>
        <Text style={styles.recently}>RENCENTLY VIEWED</Text>
        <TouchableOpacity>
          <Text style={styles.clear}> CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={TrendingsData}
        style={[{ width: width - 30 }]}
        renderItem={({ item }) => <ItemJustIn img={item.img} details={item.details} title={item.title} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default function CategoriesMainScreen() {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }]}>
      <ScrollView>
      <View style={[styles.menuList, styles.shadowStyle, { width: width - 4 }]}>
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
      <RenderJustIn />
      <View style={[styles.centerItem,{marginBottom:40, marginTop:20}]}>
        <Text style={styles.contact}>Contact Us</Text>
        <Text style={styles.contact}>FAQs</Text>
        <Text style={styles.contact}>About Us</Text>
        <Text style={styles.contact}>Terms of use</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemButton: {
    flexDirection: 'row',
    marginLeft: 10,
    padding: 10,
    paddingRight: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9b7b7'
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    padding: 2
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuList: {
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginL: {
    marginLeft: 15
  },
  itemTrending: {
    width: width * 0.7,
    height: height * 0.33,
    marginRight: 10
  },
  trendingTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  trendingDetails: {
    fontSize: 9,
    color: 'grey'
  },
  trendingImg: {
    width: "100%",
    height: '75%'
  },
  junsInItem: {
    width: width * 0.5,
    height: height * 0.2,
    marginRight: 10
  },
  trendingTitle: {
    marginTop: 10,
    width: '100%'
  },
  justInContainer: {
    width: width - 6,
    marginTop: 10,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  recently: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold'
  },
  clear: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold'
  },
  contact:{
    color:'blue',
    padding:5,
    fontSize:16
  }
})