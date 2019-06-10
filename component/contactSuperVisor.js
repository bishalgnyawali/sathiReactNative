import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class contactSuperVisor extends Component {
  render() {
    return (
      <View>
        <Image source={require('../images/contact-supervisor.jpg')} style={{width:170, height:170}}/>
      </View>
    )
  }
}
