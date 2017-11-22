import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { login, registerSuccess } from "../Actions/actionCreator";

class SignupView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.registerSuccess()}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapDispatchToProps = {
  login,
  registerSuccess
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
