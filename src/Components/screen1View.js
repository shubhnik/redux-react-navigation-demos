import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

export default class Screen1View extends Component {
  static navigationOptions = {
    title: "Screen1",
    gesturesEnabled: false,
    headerLeft: null
  };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: "screen2",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  render() {
    const {
      counterCount,
      incrementAction,
      decrementAction,
      counterString
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "yellowgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{counterCount}</Text>
        <Text>{counterString}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
          onPress={this.navigate}
        >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
            Screen2
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
