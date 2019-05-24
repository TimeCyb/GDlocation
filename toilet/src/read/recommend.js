import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Util from "./../util";

export default class recommend extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      data: props.data
    }
  }
  render() {
    var data = this.state.data;
    var views1 = [];
    var views2 = [];
    for(var i in data){
      let item = (
        <TouchableOpacity style={[styles.img_item]} key={i}  onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
          <Image style={[styles.img, styles.shadow]} source={{uri:data[i].img}}/>
          <Text numberOfLines={2}  style={styles.title}>{data[i].title}</Text>
        </TouchableOpacity>
      );
      if(i < 4 ){
        views1.push(item);
      }else{
        views2.push(item);
      }
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>{this.state.name}</Text>
        </View>
        <View style={styles.img_view}>
          {views1}
        </View>
        <View style={styles.img_view}>
          {views2}
        </View>
      </View>
    );
  }
  _showWebPage(url, title){
    this.props.navigation.navigate('TWebView',{
			title:title,
			url: url
		});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10
  },
  img_view:{
    flexDirection:'row'
  },
  img_item:{
    flex:1,
    height:160,
  },
  shadow:{
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
  },
  img:{
    height:120,
    width:(Util.size.width - 40)/4
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16
  },
  title:{
    marginTop:4,
    marginBottom:4,
    fontSize:12,
    color:'#818181'
  }
});
