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

export default class ArtistBox extends Component<{}> {

  render() {

    const { image, name, likes, comments } = this.props.artist

    const likeIcon = (<Icon name="ios-heart-outline" size={30} color="gray" />)
    const commentIcon = (<Icon name="ios-chatboxes-outline" size={30} color="gray" />)

    return (
      <View style={styles.artist}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          < Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon>{likeIcon}</Icon>
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon>{commentIcon}</Icon>
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  artist: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width: -2,
    }
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
