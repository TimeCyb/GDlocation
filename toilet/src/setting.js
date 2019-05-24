import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Util from "./util";
import About from "./setting/about";
import Detail from "./setting/detail";
import Help from "./setting/help";
import Tips from "./setting/tips";

class settingView extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bg}>
          <Text style={{fontSize:18,color:'#fff',marginTop:10,fontWeight:'bold'}}>
            设置
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={require('./setting/logo.png')} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this)}>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  _showHelp(){
    this.props.navigation.navigate('Help');
  }

  _showTips(){
    this.props.navigation.navigate('Tips');
  }
  _showAbout(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  _showDetail(){
    this.props.navigation.navigate('Detail');

  }
}

const SettingNavigator = createStackNavigator(
  {
    settingView: {
      screen: settingView,
      navigationOptions: {
          header: null
      }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: '关于'
        }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
          title: '功能介绍'
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
          title: '帮助中心'
      }
    },
    Tips: {
      screen: Tips,
      navigationOptions: {
          title: '服务条款'
      }
    }
  },
  {
    initialRouteName: 'settingView',
    /* The header config from HomeScreen is now here 
    定义所有header样式*/
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '300',
      },
    },
  }
);
const SettingContainer = createAppContainer(SettingNavigator);
export default class setting extends Component {
  render() {
      return (
          <SettingContainer/>
      );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});
