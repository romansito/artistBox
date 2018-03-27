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
  Image,
  ScrollView,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'

export default class ArtistList extends Component<{}> {

  render() {

    const artist = {
      image: "https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png",
      name: 'David Bowie',
      likes: 200,
      comments: 140
    }
    const likeIcon = (<Icon name="ios-heart-outline" size={30} color="gray" />)
    const commentIcon = (<Icon name="ios-chatboxes-outline" size={30} color="gray" />)

    return (
      <FlatList
      data={Array(500).fill(artist)}
      renderItem = { artist => <ArtistBox artist = {artist} /> }
     />
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
