import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { login } from "../Actions/actionCreator";

class SignupView extends Component {
  static navigationOptions = {
    title: "Register"
  };
  render() {
    return (
      <View style={styles.root}>
        <Text style={{ color: "white", fontSize: 20 }}>SINGUP</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.login()}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapDispatchToProps = dispatch => {
  login;
};

const Signup = connect(null, mapDispatchToProps)(SignupView);
export default Signup;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "indigo",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "pink",
    paddingHorizontal: 50,
    paddingVertical: 15
  }
});
