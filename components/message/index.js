/**
* @Author: woolson
* @Date:   2016-10-28 23:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 14:10:97
*/

import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  ListView,
  AlertIOS,
  TextInput,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
} from "react-native"

import TopBar from "../common/top-bar/"
import UStyle, { ctorLiD } from "../../global/utils.js"
import Style from "./style"

export default class Message extends Component {
  state = {
    refreshing: true,
    data: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch("http://woolson.cn/fetchAllMessage")
      .then(d => this.setState({data: this._constructorData(d), refreshing: false}))
      .catch(error => console.log(error.message))
  }

  _constructorData(d) {
    let Data = JSON.parse(d._bodyText)
    Data.reverse()
    return Data
  }

  _onRefresh() {

  }

  renderMsg() {

  }

  render() {
    return <View style={ UStyle.content }>
      <TopBar
        title="Message"
      />

      <TextInput
        style={ Style.input }
        placeholder="此页面可用作留言和BUG提交"
        multiline={ true }
      />

      <TouchableHighlight
        style={ UStyle.button }
      >
        <Text style={{color: "#FFFFFF"}}>Publish</Text>
      </TouchableHighlight>

      <ScrollView
        contentContainerStyle={{backgroundColor: "red"}}
        refreshControl={
          <RefreshControl
            title="Loading..."
            onRefresh={ this._onRefresh.bind(this) }
            refreshing={ this.state.refreshing }
          />
        }
      >
        <ListView
          enableEmptySections={ true }
          dataSource={ ctorLiD(this.state.data) }
          renderRow={ rowData => <MsgItem {...this.props} data={ rowData } /> }
        />
      </ScrollView>
    </View>
  }
}

class MsgItem extends Component {
  render() {
    const data = this.props.data

    return <View style={ Style.messageItem } >
      <Text>{ data.author }</Text>
      <Text>{ data.content }</Text>
    </View>
  }
}
