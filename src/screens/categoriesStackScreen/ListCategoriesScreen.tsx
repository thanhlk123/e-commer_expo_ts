import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import goodsItemData from '../Datas/GoodsItems'

const { width, height } = Dimensions.get('screen')

const sortList = [
    {
        id: '0',
        topic: 'Popularity',
    },
    {
        id: '1',
        topic: 'New'
    },
    {
        id: '2',
        topic: 'Discount'
    },
    {
        id: '3',
        topic: 'Price: High - Low'
    },
    {
        id: '4',
        topic: 'Price: Low - High'
    },
]

const GoodsItem = (item) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.buttonItem}
                onPress = {()=>item.navigation.navigate('ProductDetails')}
            >
                <Image
                    source={item.img}
                    style={styles.imgItem}
                    resizeMode='contain'
                />
                <View>
                    <Text>{item.name}</Text>
                    <AntDesign />
                </View>
                <View style={styles.row}>
                    {item.isDiscount ?
                        <Text style={styles.haveDiscount}>{item.price}</Text>
                        :
                        <Text style={styles.dontHaveDiscount}>{item.price}</Text>}
                    <Text style={styles.discountStyle}>{item.cost}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class GoodsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleModal: false,
            sortList: sortList,
            indexActive: 0,
            lastPageReached:false,
            goodsItemData:[],
            loading:true
        };
    }
    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <View style={styles.sortTitle}>
                <Text style={styles.textSort}>SORT BY</Text>
            </View>

            {this.state.sortList.map((item, index) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.sortTopicButton}
                    onPress={index => { this.setState({ visibleModal: false, indexActive: item.id }) }}
                >
                    <Text style={[styles.sortText, this.state.indexActive == index ? { color: 'blue' } : {}]}>{item.topic}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
    componentDidMount(){
        this.setState({
            goodsItemData:goodsItemData.slice(0,6)
        })
    }
    _getMoreGoodsItem=()=>{
        let lengthRender=this.state.goodsItemData.length;
        let lengthData=goodsItemData.length;
        if(lengthData>lengthRender+4){
            setTimeout(() => {
                this.setState({
                    goodsItemData:goodsItemData.slice(0,lengthRender+4)
                })
            }, 1000);
            
        }
        else if(lengthData>lengthRender) {
            this.setState({
                goodsItemData:goodsItemData,
                lastPageReached:true
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.row, styles.filterArea]}>
                    <TouchableOpacity
                        style={[styles.row, styles.sortButton]}
                        onPress={() => { this.setState({ visibleModal: true }) }}
                    >
                        <Text />
                        <AntDesign name='down' size={18} color='black' />
                        <Text style={[styles.filterText]}>SORT</Text>
                        <Text />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.row, styles.refineButton]}
                    >
                        <Text />
                        <AntDesign name='down' size={18} color='black' />
                        <Text style={styles.filterText}>REFINE</Text>
                        <Text />
                    </TouchableOpacity>
                </View>
                <SafeAreaView
                    style={styles.mainViewContainer}
                >
                    <FlatList
                        data={this.state.goodsItemData}
                        renderItem={({ item }) => <GoodsItem img={item.img}
                            name={item.name}
                            navigation={this.props.navigation}
                            price={item.price}
                            cost={item.cost}
                            isDiscount={item.isDiscount} />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        onEndReached={this._getMoreGoodsItem}
                        onEndReachedThreshold={1}
                        ListFooterComponent={this.state.lastPageReached ? <Text style={styles.endText}>No more product</Text> : <ActivityIndicator
                            size="large"
                            loading={this.state.loading}
                        />}
                    />
                </SafeAreaView>
                <View style={styles.sortContainer}>
                    <Modal isVisible={this.state.visibleModal} style={styles.bottomModal}>
                        {this._renderModalContent()}
                    </Modal>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    sortButton: {
        width: width * 0.5,
        borderRightColor: 'grey',
        borderRightWidth: 0.5,
        justifyContent: 'space-around',
        height: 30,
        alignItems: 'center'
    },
    refineButton: {
        width: width * 0.5,
        justifyContent: 'space-around',
        height: 30,
        alignItems: 'center'
    },
    filterArea: {
        height: 35,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    mainViewContainer: {
        flex: 1,
        marginTop: 20
    },
    imgItem: {
        width: width * 0.4,
        height: 200,
    },
    buttonItem: {
        width: 0.45 * width,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginRight: 0.025 * width,
        borderWidth: 0.5,
        borderColor: '#e8e1e1',
        marginBottom: 10
    },
    dontHaveDiscount: {
        fontWeight: 'bold'
    },
    haveDiscount: {
        fontWeight: 'bold',
        color: 'red',
        marginRight: 10
    },
    discountStyle: {
        textDecorationLine: 'line-through',
        color: 'grey'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    sortTopicButton: {
        padding: 10,
    },
    sortText: {
        color: 'grey'
    },
    sortTitle: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSort: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 13
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }

});