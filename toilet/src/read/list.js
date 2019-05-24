import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import Util from "./../util";

export default class list extends Component {
  _keyExtractor = (item, index) => item.id;
  constructor(props){
    super(props);
    this.state = {
      title: props.navigation.state.params.title,
      url: props.navigation.state.params.passProps.url
    }
  }
  //修改header标题 静态
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor = {this._keyExtractor}
          renderItem={({item}) => 
          <TouchableOpacity style={[styles.item, styles.row]} key={item.id} onPress={this._showWebPage.bind(this, item.url, item.title)}>
            <View>
              <Image style={styles.img} source={{uri:item.img}}/>
            </View>
            <View style={styles.text}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.name}>{item.time?item.time:'5-21'}</Text>
            </View>
          </TouchableOpacity>}
        />
      </View>
    );
  }
  componentDidMount(){
    let url = this.state.url;
    let that = this;
    Util.get(url, function(data){
      if(data.status === 1){
        that.setState({
          data: data.data
        })
      }else{
        alert('服务异常，正在紧急修复，请耐心等待');
      }
    },function(err){
      alert(err);
    })
  }
  _showWebPage(url, title){
    this.props.navigation.navigate('TWebView',{
			title:title,
			url: url
		});
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  item:{
    height:70,
    borderBottomWidth: Util.pixel,
    borderBottomColor:'#ccc'
  },
  row:{
    flexDirection: 'row'
  },
  img:{
    height:60,
    width:60,
    marginLeft:10,
    marginTop:5,
    borderWidth:Util.pixel,
    borderRadius:3,
    borderColor:'#fff'
  },
  text:{
    marginLeft:7
  },
  title:{
    fontSize:16,
    marginTop:10,
    width:Util.size.width -80
  },
  name:{
    fontSize:14,
    color: '#ccc',
    marginTop:10
  }
});
