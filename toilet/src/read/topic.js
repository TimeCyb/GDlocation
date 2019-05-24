import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Util from './../util';

export default class topoic extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      data: props.data
    }
  }
  render() {
    var views=[];
    var data = this.state.data;
    for(var i in data){
      views.push(
        <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
          <Image resizeMode="cover"
            style={styles.img}
            source={{uri: data[i].img}}
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          {views}
        </View>
        <View>
          <Text style={styles.text2}>查看更多同期专题&gt;</Text>
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
  img:{
    height:80,
    width:(Util.size.width - 30)/2,
    borderRadius:5
  },
  img_item:{
    flex:1
  },
  img_view:{
    flexDirection:'row'
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16
  },
  text2:{
    color:'#cccccc',
    marginTop:6,
    fontSize:13,
    fontWeight:'300',
    marginBottom:10
  }
});
