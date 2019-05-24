import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  } from 'react-native';

import Util from './../util';
import List from './list';

class Search extends Component{
  render(){
    return (
      <View style={{height:70}}>
        <TextInput style={styles.search} placeholder="搜索"
                   onSubmitEditing={this._onSubmitEditing.bind(this)}
                   returnKeyType="search"
                   placeholderTextColor="#494949" autoFocus={false} onChangeText={this._onChangeText}/>
      </View>
    );
  }
  _onChangeText(){}

  _onSubmitEditing() {
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: '互联网资讯',
      passProps:{
        type: 'it'
      }
    });
  }
}
const styles = StyleSheet.create({
  search: {
    margin: 10,
    lineHeight: 35,
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    borderRadius:3,
    paddingLeft:10,
    fontSize:15
  }
});

module.exports = Search;