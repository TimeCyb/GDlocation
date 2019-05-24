import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from "react-native-webview";

export default class twebview extends Component {
  constructor(props) {
    super(props);
    if(this.props.url){
      this.state = {
        url: this.props.url,
        isError: false
      };
    }else{
      this.state = {
        url: this.props.navigation.state.params.url,
        isError: false
      };
    };
  }
  //修改header标题 静态
  static navigationOptions = ({ navigation }) => {
    if(navigation){
      return {
        title: navigation.state.params.title,
      };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isError?
            <View style={styles.errorInfo}>
              <Text style={styles.text}>网络有问题，请检查网络情况，再刷新</Text>
            </View>
          :
            <WebView
              source={{ uri: this.state.url }}
              style={{ marginTop: 0 }}
              onLoadProgress={e => console.log(e.nativeEvent.progress)}
              onError={ this._showError.bind(this) }
              startInLoadingState = {true}
              javaScriptEnabled = {true}
              geolocationEnabled = {true}
              domStorageEnabled = {true}
            />
        }
      </View>
    );
  }
  _showError(){
    this.setState({
      isError: true
    })
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorInfo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:16,
    fontWeight:'300'
  }
});

