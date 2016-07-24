/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//导入json数据
var BagData = require('./BadgeData.json')

class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllBag()}
      </View>
    );
  }

  renderAllBag() {
    //定义数组内所有的包数组-子组件
    var allBag = [];
    //遍历json数据
    for (var i = BagData.data.length - 1; i >= 0; i--) {
      BagData.data[i]
      //取出单独的数据对象
      var badge = BagData.data[i];

      //直接插入数组
      allBag.push(
        <View style={styles.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
          <Text style={styles.inerTitleStyle}>
           {badge.title}
          </Text>
        </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5FCFF',
  },
  outViewStyle: {

  },
  imageStyle: {

  },
  inerTitleStyle: {

  }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
