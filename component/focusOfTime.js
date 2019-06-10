import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class focusOfTime extends Component {
  render() {
    return (
      <View>
        <Image source={require('../images/focus.png')} style={{width:170, height:170}}/>
      </View>
    )
  }
}
