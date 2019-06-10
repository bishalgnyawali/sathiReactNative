import React, { Component } from 'react'
import {View, Image } from 'react-native'

export default class punchIn extends Component {
  render() {
    return (
      <View>
        <Image source={require('../images/punch-png-5.png')} style={{width:170, height:170}}/>
      </View>
    )
  }
}
