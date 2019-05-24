import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, PixelRatio} from 'react-native';

// 1) fetch
// 2) 获取屏幕的高宽
// 3) 获取最小线宽
module.exports = {
  size: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  //10 * 1 / PixelRatio.get()
  pixel: 1 / PixelRatio.get(),
  //fetch <=> ajax
  get: function(url, successCallback, failCallback){

    fetch(url,{
      headers:{
        'Cache-Control': 'no-cache'
      }
    })
      .then((response) => response.text())
      .then((responseText) => {
        successCallback(JSON.parse(responseText));
      })
      .catch(function(err){
        failCallback(err);
      });
  },
}

