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
var BagData = require('./BadgeData.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');



var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
var TestView = require('./TestView.js')

class BViewDemo extends Component {
  render() {
    return (
            // {*<View style={styles.container}> {this.renderAllBag()}</View>*}
      <TestView />
    );
  }

  renderAllBag() {
    //定义数组内所有的包数组-子组件
    var allBag = [];
    //遍历json数据
    for(var i=0; i<BagData.data.length; i++){
      BagData.data[i]
      //取出单独的数据对象
      var badge = BagData.data[i];

      //直接插入数组
      allBag.push(
        <View key={i} style={styles.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles.imageStyle}/>
          <Text style={styles.inerTitleStyle}>
           {badge.title}
          </Text>
        </View>
        );
    }
    //返回数组
    return allBag;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
     // 换行显示
    flexWrap:'wrap',
    backgroundColor: '#F5FCFF',
    flexDirection:'row'
  },
  outViewStyle: {
    backgroundColor:'red',
    //设置测轴的对齐方式
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin
  },
  imageStyle: {
    width: 80,
    height: 80
  },
  inerTitleStyle: {

  }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
