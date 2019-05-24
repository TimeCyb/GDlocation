import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Util from "./../util";

export default class category extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: props.data,
			navigation: props.navigation
		}
	}
	_goToList(name){
		let type = this._getType(name);
		let url = 'http://118.25.238.244/GDlocation/' + type + '.json';
		this.props.navigation.navigate('List',{
			title:name,
			passProps:{
				url: url
			}
		});
	}
	_getType(name){
		let type = 'it';
		switch(name){
			case '互联网':
				type = 'it';
				break;
			case '笑话':
				type = 'cookies';
				break;
			case '管理':
				type = 'manager';
				break;
			case '散文':
				type = 'sanwen';
				break;
			default:
				type = 'it';
		}
		return type;
	}
  render() {
		let data = this.state.data;
		let navigation = this.state.navigation;
		let views1 = [];
		let views2 = [];
		for(var i in data){
			let item = (
				<View style={styles.row.item} key={i}>
					<TouchableOpacity style={styles.item} onPress={this._goToList.bind(this,data[i].text)}>
						<Text style={styles.title}>{data[i].text}</Text>
					</TouchableOpacity>
				</View>
			)
			if(i < 2){
				views1.push(item);
			}else{
				views2.push(item);
			}
			
		}
    return (
			<View style={styles.container}>
				<Text style={styles.text1}>分类</Text>
				<View style={styles.row}>
					{views1}
				</View>
				<View style={styles.row}>
					{views2}
				</View>
			</View>
    );
	}
	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16
  },
  row:{
  	flexDirection:'row',
  	marginTop:5
  },
  row_item:{
  	flex: 1,
  },
  item:{
  	height:40,
  	width: (Util.size.width - 20)/2,
  	borderColor:'#F1F1F1',
  	borderWidth:Util.pixel,
  	justifyContent:'center',
  	alignItems:'center',
  	borderRadius:5
  },
  title:{
  	color:'#707070',
  	fontSize:17,
  	fontWeight:'400'
  }
});
