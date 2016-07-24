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
  TextInput,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class TestView extends Component {
  render() {
    return (
      <View style={styles.container}>
         {/*头像*/}
         <Image source={require('./img/icon.png')} style = {styles.iconStyle} />
         {/*账号 密码*/}
         <TextInput placeholder={'请输入用户名'} style = {styles.textInputStyle} />
         <TextInput placeholder={'请输入密码'} password={true} style = {styles.textInputStyle} />
         {/*登录*/}
         <View style={styles.loginBtnStyle}>
            <Text style={{color:'white'}}>登录</Text>
         </View>
         {/*设置*/}
         <View style={styles.settingStyle}>
          <Text style={{color:'orange'}}>无法登录</Text>
          <Text style={{color:'orange'}}>新用户</Text>
         </View>
         {/*其他登录方式*/}
         <View style={styles.otherLoginStyle}>
            <Text>其他登录方式:</Text>
            <Image source={require('./img/icon3.png')} style = {styles.otherImageStyle} />
            <Image source={require('./img/icon7.png')} style = {styles.otherImageStyle} />
            <Image source={require('./img/icon8.png')} style = {styles.otherImageStyle} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems:'center',
  },
  iconStyle: {
    width:80,
    height:80,
    borderRadius:40,
    borderColor:'white',
    borderWidth:2,
    marginTop:50,
    marginBottom:30,
  },
  otherImageStyle: {
    width:50,
    height:50,
    borderRadius:25,
    marginLeft:8,
  },
  textInputStyle: {
    height:38,
    backgroundColor:'white',
    marginBottom:1,
    textAlign:'center'
  },
  loginBtnStyle: {
    height:35,
    backgroundColor:'blue',
    width:width*0.9,
    marginTop:50,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  settingStyle: {
    //设置主轴方向
    flexDirection:'row',
    // backgroundColor:'green',
    //设置主轴对齐方式
    justifyContent:'space-between',
    width:width*0.9,
    height:25
  },
  otherLoginStyle: {
    //设置主轴方向
    flexDirection:'row',
    alignItems:'center',

    //绝对定位
    position:'absolute',
    bottom:10,
    left:20,
  }


});

module.exports = TestView;
