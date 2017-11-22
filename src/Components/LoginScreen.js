import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { login, register } from "../Actions/actionCreator";

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };

  navigateToRegisterScreen = () => {
    this.props.register();
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyles}>
          This is a dummy Login Screen, no TextInputs, only Dummy Login button.
        </Text>
        <Text style={[styles.textStyles, { marginTop: 10 }]}>
          This is a completely synchronous flow, just for demo.
        </Text>
        <Text style={[styles.textStyles, { marginTop: 10 }]}>
          In real life situation, you might be doing async task like calling a
          remote server to authenticate.You might need redux-thunk to dispatch
          action asynchronously.
        </Text>
        <TouchableOpacity
          onPress={this.props.login}
          style={styles.touchableStyles}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Login</Text>
        </TouchableOpacity>
        <Text
          onPress={this.navigateToRegisterScreen}
          textDecorationLine="underline"
          style={{ fontSize: 18, fontWeight: "500", marginTop: 10 }}
        >
          Register
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyles: {
    textAlign: "center",
    color: "rgba(0,0,0,0.8)",
    fontSize: 16
  },
  touchableStyles: {
    marginTop: 15,
    backgroundColor: "black",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  }
});

const mapDispatchToProps = {
  login,
  register
};

const Login = connect(null, mapDispatchToProps)(LoginScreen);

export default Login;
