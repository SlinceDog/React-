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
  Image,
} from 'react-native';

export default class DemoReactNative extends Component {
  render() {
   var mockData = {title: 'Film', year: '2015' , posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}};
   return (
       <View style={styles.container}>
        <Image source={{url: mockData.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
         <Text>{mockData.title}</Text>
         <Text>{mockData.year}</Text>
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff721f'
    },
    thumbnail: {
        width: 53,
        height: 53
     }
});

AppRegistry.registerComponent('DemoReactNative', () => DemoReactNative);
