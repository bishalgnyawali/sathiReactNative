import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class messagetoTeam extends Component {
  render() {
    return (
      <View>
        <Image source={require('../images/message.png')} style={{width:170, height:170}}/>
      </View>
    )
  }
}
