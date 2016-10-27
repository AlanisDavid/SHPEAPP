/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class SHPEAPP extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require("./shpepic.png")} style={{width:200, height:110}} />
        <Text style={styles.welcome}>
          Society of Hispanic Professional Engineers
        </Text>
        <Text style={styles.instructions}>
          Log in: 
        </Text>
         <TextInput
                style={{height:40}}
                placeholder="Username"
                onChangeText={(text) => this.setState({text})}
                />
        <Text style={styles.instructions}>
          Password:
        </Text>
        
      </View>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SHPEAPP', () => SHPEAPP);
