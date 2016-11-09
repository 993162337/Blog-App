/**
* @Author: woolson
* @Date:   2016-10-29 13:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 14:10:14
*/

import React, { Component, PropTypes } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import Style from "./style"

export default class TopBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    lText: PropTypes.string,
    rText: PropTypes.string,
  }

  render() {
    return <View style={ Style.topBar }>
      {
        this.props.lText && <TouchableHighlight
          underlayColor="#FFF"
          style={ Style.topBarLeft }
          onPress={ () => {
            this.props.lFunc && this.props.lFunc()
          } }
        >
          <Icon name="ios-arrow-back">
            <Text>
              { " " + this.props.lText }
            </Text>
          </Icon>
        </TouchableHighlight>
      }

      <Text style={{fontWeight: "bold"}}>{ this.props.title }</Text>

      {
        this.props.rText && <TouchableHighlight
          underlayColor="#FFF"
          style={ Style.topBarRight }
        >
            <Text>
              { this.props.rText + " " }
              <Icon name="ios-arrow-back" />
            </Text>
        </TouchableHighlight>
      }
    </View>
  }
}
