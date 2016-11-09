/**
* @Author: woolson
* @Date:   2016-10-14 16:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 13:10:30
*/

import React, { Component } from "react"
import { View, Text, TextInput, Image, ListView, StatusBar, NavigatorIOS, TouchableHighlight, AlertIOS, TabBarIOS } from "react-native"
// import Icon from "react-native-vector-icons/Ionicons"
import Icon from "react-native-vector-icons/Ionicons"
import Style from "./style"
import Study from "../study/"
import Message from "../message/"

export default class Test extends Component {
  constructor(props) {
    super(props)

    const Ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      text: "Hello World",
      title: "Home",
      user: {
        name: "woolson",
      },
      data: Ds.cloneWithRows(["John", "Joel", "James", "Jimmy", "Jackson", "Jillian", "Julie", "Devin"]),
    }
  }

  render = () => {
    return <NavigatorIOS
      initialRoute={{
        title: "Woolson Lee",
        component: Home,
      }}
      style={{flex: 1}}
      translucent={ true }
      barTintColor="#FFFFFF"
      navigationBarHidden={ true }
    />
  }
}

class Home extends Component {
  state = {
    text: "Hello World",
    user: {
      name: "woolson",
    },
    index: 1,
  }

  changeTab = index => {
    // this.props.navigator.replace({
    //   title: ["Home", "Study", "Message"][index],
    //   component: [Home, Study, Message][index],
    // })
    this.setState({index: index})
    // this.props.setTitle(["Home", "Study", "Message"][index])
  }

  render = () => <View style={{ flex: 1 }}>
    <TabBarIOS style={{flex: 1}}>
      <Icon.TabBarItem
        title="Home"
        color="red"
        iconName="ios-home-outline"
        selectedIconName="ios-home"
        selected={ this.state.index === 0 }
        onPress={ this.changeTab.bind(this, 0) }
      >
        <Text>Book</Text>
      </Icon.TabBarItem>

      <Icon.TabBarItem
        title="Study"
        iconName="ios-book-outline"
        selectedIconName="ios-book"
        selected={ this.state.index === 1 }
        onPress={ this.changeTab.bind(null, 1) }
      >
        <Study {...this.props} />
      </Icon.TabBarItem>

      <Icon.TabBarItem
        title="Message"
        iconName="ios-chatboxes-outline"
        selectedIconName="ios-chatboxes"
        selected={ this.state.index === 2 }
        onPress={ this.changeTab.bind(null, 2) }
      >
        <Message />
      </Icon.TabBarItem>
    </TabBarIOS>
  </View>
}
