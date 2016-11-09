/**
* @Author: woolson
* @Date:   2016-10-15 23:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 14:10:47
*/

import { StyleSheet } from "react-native"
import Color from "../../global/color"

export default {
  item: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderLeftColor: "white",
    borderRightColor: "white",
    borderColor: Color.border,
  },
  item_user: {
    flexDirection: "row",
    alignItems: "center",
  },
  item_user_avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  item_user_author: {
    color: Color.blue,
    fontSize: 16,
    marginBottom: 3,
  },
  item_user_info: {
    color: "#CCCCCC",
    fontSize: 12,
  },
  item_content: {
    marginTop: 10,
    backgroundColor: Color.background,
    borderRadius: 3,
    padding: 10,
    overflow: "hidden",
  },
  item_image_content: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  img: {
    marginTop: 5,
    flex: 1,
  },
  detailContent: {
    padding: 10,
  },
}
