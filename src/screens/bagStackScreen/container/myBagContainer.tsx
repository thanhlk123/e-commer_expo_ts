import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import { connect } from 'react-redux';
import RenderItemChoosed from '../Component/RenderItemChoosed'

class myBagContainer extends Component<any> {

  constructor(props) {
    super(props);
  }

  render() {
    const { number }  = this.props.number;

    return (
        <RenderItemChoosed val={ number }
        itemName="Đầm Belted Hoa Nhiều màu Boho"
        itemPrice="418.000"
        {...this.props} />
    );
  }
}



export default connect( 
  state => {
    return {
    }
  },
  dispatch => {
    return {
    }
  }

)(myBagContainer);