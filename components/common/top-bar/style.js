/**
* @Author: woolson
* @Date:   2016-10-29 14:10:00
* @Email:  woolson.lee@gmail.com
* @Last modified by:   woolson
* @Last modified time: 2016-10-29 14:10:05
*/

import Color from "../../../global/color"

export default {
  topBar: {
    height: 64,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  topBarLeft: {
    position: "absolute",
    flexDirection: "row",
    left: 5,
    top: 28,
  },
}
