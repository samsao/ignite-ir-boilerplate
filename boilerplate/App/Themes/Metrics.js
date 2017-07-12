import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  width: {
    screen: width < height ? width : height,
  },
  margin: {
    horizontal: 10,
    vertical: 10,
    section: 25,
    base: 10,
    doubleBase: 20,
    small: 5,
    doubleSection: 50,
  },
  height: {
    screen: width < height ? height : width,
    searchBar: 30,
    navBar: (Platform.OS === 'ios') ? 64 : 54,
    horizontalLine: 1,
    notification: 40,
    button: 45,
  },
  radius: {
    button: 4,
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  }
}

export default metrics
