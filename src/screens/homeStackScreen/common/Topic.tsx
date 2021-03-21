import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default class Topic extends Component<
  {title: string},
  { expanded: boolean; animation: any; maxHeight: number; minHeight: number }
> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      animation: new Animated.Value(48),
      maxHeight: 0,
      minHeight: 0,
    };
  }
  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);

    Animated.timing(this.state.animation, {
      toValue: finalValue,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  _setMaxHeight(event) {
    let maxHeight = event.nativeEvent.layout.height;
    this.setState({
      maxHeight: maxHeight,
    });
  }

  _setMinHeight(event) {
    let minHeight = event.nativeEvent.layout.height;
    this.setState({
      minHeight: minHeight,
    });
  }

  render() {
    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={[styles.titleContainer]}
          onLayout={this._setMinHeight.bind(this)}
        >
          <TouchableHighlight
            style={[styles.button]}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#c9b7b7",
                borderBottomWidth: 0.5,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={[styles.title, { flex: 1, fontWeight: "700" }]}>
                {this.props.title}
              </Text>
              {this.state.expanded ? (
                <View>
                  <AntDesign name="up" size={12} />
                </View>
              ) : (
                <View>
                  <AntDesign name="down" size={12} />
                </View>
              )}
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
  titleContainer: {},
  button: {},
  body:{},
});
