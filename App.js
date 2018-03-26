/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component<{}> {

  render() {
    const image = "https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png";
    const name = 'David Bowie'
    const likeIcon = (<Icon name="ios-heart-outline" size={30} color="#900" />)


    return (
      <View style={styles.container}>
        <View style={styles.artist}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            < Text style={styles.name}>{name}</Text>
            <Icon>{likeIcon}</Icon>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'lightgray',
  },
  image: {
    width: 150,
    height: 150,
  },
  artist: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  }
});
