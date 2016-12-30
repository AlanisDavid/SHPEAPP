/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
import MainScreen from './MainScreen';
export default class SHPEAPP extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require("./shpepic.png")} style={{width:200, height:110}} />
        <Text style={styles.welcome}>
          Society of Hispanic Professional Engineers
        </Text>
        <LogIn />
        <LoginButton/>
      </View>
    );
  }
}

class LogIn extends Component {
  render() {
    return (
      <View style= {{margin:10}} >
      <View style = {styles.loginInput} >
        <Text style={styles.directions}>
          Log in:  </Text> 
        <TextInput
          style={styles.instructions}
          placeholder= "Username"
          onChangeText={(text) => this.setState({text})}/>
        </View>
        <View style = {styles.loginInput} >
        <Text style={styles.directions}>
          Password: </Text>
        <TextInput
          style={styles.instructions}
          placeholder= "Password"
          onChangeText={(text) => this.setState({text})}/>
          </View>
          </View>
      );
  }
}

class LoginButton extends Component {
  _onPressButton() {
    
    Alert.alert("Button Pressed");
  }
  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
      <Text>Button</Text>
      </TouchableHighlight>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  directions: {
    color: '#333333',
    marginBottom: 5,
    height: 18,
    fontSize: 15, 
    width:71
  },
  instructions:{
    color: '#333333',
    marginBottom: 5,
    height: 18,
    fontSize: 15, 
    width:101
  },
  loginInput : {
    alignItems: 'center',
    flexDirection: "row"
  }
});

AppRegistry.registerComponent('SHPEAPP', () => SHPEAPP);
