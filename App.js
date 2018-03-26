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
import ArtistBox from './ArtistBox'

export default class App extends Component<{}> {

  render() {
    const image = "https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png";
    const name = 'David Bowie'
    const likeIcon = (<Icon name="ios-heart-outline" size={30} color="gray" />)
    const likes = 200
    const commentIcon = (<Icon name="ios-chatboxes-outline" size={30} color="gray" />)
    const comments = 140

    return (
      <View style={styles.container}>
        <ArtistBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'lightgray',
  }
});
