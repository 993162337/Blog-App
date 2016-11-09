/**
* @Author: woolson
* @Date:   2016-10-15 13:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 14:10:08
*/

import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  NavigatorIOS,
  RefreshControl,
  TouchableHighlight,
} from "react-native"
import TopBar from "../common/top-bar/"
import Icon from "react-native-vector-icons/Ionicons"
import Style from "./style"
import UStyle, { ctorLiD } from "../../global/utils"

import Moment from "moment"
import Color from "../../global/color"
import Author from "../author"

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch("http://woolson.cn/fetchAllArticle")
      .then(d => this.setState({data: this._constructorData(d), refreshing: false}))
      .catch(error => console.log(error.message))
  }

  _constructorData(d) {
    let Data = JSON.parse(d._bodyText)
    Data.reverse()
    return Data
  }

  _onRefresh() {
    this.setState({refreshing: true}, this.fetchData)
  }

  render() {
    const data = ctorLiD(this.state.data)

    return <View style={{ flex: 1, paddingBottom: 49 }}>
      <TopBar
        title="Study"
      />

      <ScrollView
        style={{backgroundColor: "#F9F9F9"}}
        refreshControl={
          <RefreshControl
            title="Loading..."
            onRefresh={ this._onRefresh.bind(this) }
            refreshing={ this.state.refreshing }
          />
        }
      >
        <ListView
          dataSource={ data }
          enableEmptySections={ true }
          renderRow={ rowData => <ListItem {...this.props} data={ rowData } /> }
        />
      </ScrollView>
    </View>
  }
}

class ListItem extends Component {
  itemPress(e) {
    this.props.navigator.push({
      title: this.props.data.author,
      component: Details,
      passProps: this.props,
      navigationBarHidden: true,
    })
  }

  toAuthor(data) {
    this.props.navigator.push({
      title: data.author,
      component: Author,
      passProps: data,
      navigationBarHidden: true,
    })
  }

  renderImg(evt) {
    const imgs = [1, 2, 3, 4, 5, 6]
    return imgs.map((i, index) => {

      return <Image
        key={ i }
        style={ Style.img }
        source={{uri: "http://woolson.cn/assets/images/logo.png"}}
      />
    })
  }

  render() {
    const Data = this.props.data

    return <TouchableHighlight
      underlayColor="#F9F9F9"
      onPress={ this.itemPress.bind(this) }
    >
      <View
        style={ Style.item }
      >
        <View style={ Style.item_user }>
          <TouchableHighlight
            onPress={ this.toAuthor.bind(this, Data) }
            style={ Style.item_user_avatar }
          >
            <Image
              style={ Style.item_user_avatar }
              source={ require("../../assets/img/logo.png") }
            />
          </TouchableHighlight>

          <View>
            <Text style={ Style.item_user_author }>{ Data.title }</Text>
            <Text style={ Style.item_user_info }>
              <Icon name="ios-calendar" color={ Color.yellow }>
                { " " + Moment(Data.createTime).fromNow() + "  " }
              </Icon>

              <Icon name="ios-pricetag" color={ Color.lightblue }>
                { " " + Data.tags }
              </Icon>
            </Text>
          </View>
        </View>

        <View style={ Style.item_content }>
          <Text>{ Data.content }</Text>

          <View style={ Style.item_image_content }>{ this.renderImg() }</View>
        </View>
      </View>
    </TouchableHighlight>
  }
}

class Details extends Component {
  render() {
    return <View style={{flex: 1}}>
      <TopBar
        title={ this.props.data.title }
        lText="Back"
        lFunc={ () => this.props.navigator.pop() }
      />

      <Text style={ Style.detailContent }>
        { this.props.data.content }
      </Text>
    </View>
  }
}
