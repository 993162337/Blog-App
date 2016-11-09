/**
* @Author: woolson
* @Date:   2016-10-18 17:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-19 10:10:18
*/

import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import Style from "./style"

export default class AuthorPage extends Component {
  render() {
    return <View style={{flex: 1}}>
      <View style={ Style.avatar }>
        <Image
          style={ Style.avatar_bg }
          source={ require("../../assets/img/logo.png") }
          blurRadius={ 20 }
        >


          <Image
            style={ Style.avatar_img }
            source={ require("../../assets/img/logo.png") }
          />
        </Image>
      </View>

      <Text>{ "this.props.data.content" }</Text>
    </View>
  }
}
