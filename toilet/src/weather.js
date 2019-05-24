import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TWebView from './twebview';

export default class weather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TWebView url="https://www.timejun.com/GDlocation/weather.html"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
