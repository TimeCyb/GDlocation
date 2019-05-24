import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import TwebView from './twebview';

export default class tolietPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TwebView url="https://www.timejun.com/GDlocation/nearby.html"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
