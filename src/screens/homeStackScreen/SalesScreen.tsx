import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')

const RenderSalesShop = (props) => {
    return (
        <TouchableOpacity style={[styles.saleContainers, styles.shadowStyle, { width: width - 6, marginTop: 20 }, styles.centerItem]}
            onPress={() => { props.navigation.navigate('Categories', { screen: 'ListCategories' }) }}
        >
            <Image
                source={props.imgUrl}
                style={styles.shopImage}
                resizeMode="cover"
            />
        </TouchableOpacity>

    )
}
const salesProgramData = [
    {
        imgUrl: require('../images/sale/Sales_Screen/bag.jpg'),
        details: " 30-50% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/clothes.jpg'),
        details: "Up to 60% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/khan_quang_co.jpg'),
        details: " 30-50% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/phu_kien.jpg'),
        details: "Up to 30% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/phu_kien_women.jpg'),
        details: " 30-50% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/Sales_jacket.png'),
        details: " 40-70% Off"
    },
    {
        imgUrl: require('../images/sale/Sales_Screen/Sales_Shoes.png'),
        details: " 30-50% Off"
    },
]
const RenderSalesProgram = (props) => {
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", width: "95%" }}>
            {props.data.map(programs => {
                return (
                    <TouchableOpacity key={programs.imgUrl}
                        style={[styles.salesPropgramContainer, styles.shadowStyleProgramItem]}
                        onPress={() => { props.navigation.navigate('Categories', { screen: 'ListCategories' }) }}
                    >
                        <View style={[styles.width100, styles.centerItem]}>
                            <Image source={programs.imgUrl}
                                style={styles.saleProgramImg}
                                resizeMode="contain"
                            />
                            <Text style={styles.saleProgramItemText}>{programs.details}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}


export default class SalesScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 30 }}>
                            <RenderSalesShop imgUrl={require('../images/sale/Sales_Screen/fashionShop.jpg')}
                                navigation={this.props.navigation}
                            />
                            <View style={styles.centerItem}>
                                <Text style={styles.salesTextTitle}>---Last Chance of Stock Up---</Text>
                            </View>
                            <RenderSalesProgram data={salesProgramData}
                                navigation={this.props.navigation}
                            />

                            <RenderSalesShop imgUrl={require('../images/sale/Sales_Screen/fashionShop1.jpg')}
                                navigation={this.props.navigation}
                            />
                            <View style={styles.centerItem}>
                                <Text style={styles.salesTextTitle}>---Shop Categories---</Text>
                                <Text style={styles.salesTextTitle2}>30-70% Off</Text>
                            </View>
                            <RenderSalesProgram data={salesProgramData}
                                navigation={this.props.navigation}
                            />
                            <RenderSalesShop imgUrl={require('../images/sale/Sales_Screen/fashionShop3.jpg')}
                                navigation={this.props.navigation}
                            />
                            <View style={styles.centerItem}>
                                <Text style={styles.salesTextTitle}>---Shop More Brands---</Text>
                            </View>
                            <RenderSalesProgram data={salesProgramData}
                                navigation={this.props.navigation}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
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
    shadowStyleProgramItem: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    shopImage: {
        width: width - 26,
        height: 120

    },
    width100: {
        flex: 1
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginL: {
        marginLeft: 15
    },
    renderSaleImg: {
        width: '95%'
    },
    saleContainers: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: "#d6d2d2",
        borderRadius: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
        maxHeight: 200
    },
    salesTextTitle: {
        fontWeight: "bold",
        fontSize: 18,
        fontStyle: "italic",
        paddingVertical: 5
    },
    salesTextTitle2: {
        fontWeight: "bold",
        fontSize: 14,
        fontStyle: "italic",
        paddingBottom: 5
    },
    salesPropgramContainer: {
        width: "30%",
        borderWidth: 0.5,
        borderColor: "#d6d2d2",
        borderRadius: 5,
        marginLeft: "3%",
        marginVertical: 10,
        backgroundColor: 'white',
    },
    saleProgramImg: {
        width: "100%",
        height: 100
    },
    saleProgramItemText: {
        fontWeight: "bold",
        fontSize: 12,
        paddingVertical: 5
    }
})