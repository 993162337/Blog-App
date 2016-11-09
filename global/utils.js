import color from "./color"
import { ListView } from "react-native"

export default {
  content: {
    flex: 1,
    paddingBottom: 49,
  },
  button: {
    width: 375,
    height: 40,
    backgroundColor: color.blue,
    justifyContent: "center",
    alignItems: "center",
  },
}

export function ctorLiD(data) {
  if(!data && !data.length) return []
  const Ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  return Ds.cloneWithRows(data)
}
