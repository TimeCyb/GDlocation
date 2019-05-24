import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Navigator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Util from "./util";
import Category from "./read/category";
import Recommend from "./read/recommend";
import Search from "./read/search";
import Topic from "./read/topic";
import List from "./read/list";
import TWebView from './twebview';

class Hr extends Component{
  render(){
    return (
        <View>
          <View style={styles.hr}></View>
        </View>
      )
  }
}

class ReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow?
            <ScrollView style={styles.container}>
              <Topic data={this.state.recommendTopic} navigation={this.props.navigation} />
              <Hr/>
              <Recommend name="热门推荐" data={this.state.hotTopic} navigation={this.props.navigation} />
              <Hr/>
              <Category data={this.state.category} navigation={this.props.navigation} />
              <Hr/>
              <Recommend name="清醒一刻" data={this.state.other} navigation={this.props.navigation} />
            </ScrollView>
          :<ScrollView></ScrollView>
        }
        
      </View>
    );
  }
  //TODO  fetch data
  componentDidMount(){
    var that = this;
    Util.get('http://118.25.238.244/GDlocation/data.json',function(data){
      if (data.status === 1) {
        let obj = data.data;
        let recommendTopic = obj.recommendTopic;
        let hotTopic = obj.hotTopic;
        let other = obj.other;
        let category = obj.category;
        that.setState({
          isShow: true,
          recommendTopic: recommendTopic,
          hotTopic: hotTopic,
          other: other,
          category: category
        });
      }else{
        alert(data);
      }
    },function(err){
      alert(data);
    })
  }
}

const AppNavigator = createStackNavigator(
  {
    Hr: Hr,
    ReadView: {
        screen: ReadView,
        navigationOptions: {
            title: 'Home',
            header: null
        }
    },
    List: {
      screen: List
    },
    TWebView: {
      screen: TWebView
    }
  },
  {
    initialRouteName: 'ReadView',
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
const AppContainer = createAppContainer(AppNavigator);
export default class read extends Component {
  render() {
      return (
          <AppContainer/>
      );
  }
}
// export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr:{
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    marginTop:5,
    marginBottom:5
  }
});
