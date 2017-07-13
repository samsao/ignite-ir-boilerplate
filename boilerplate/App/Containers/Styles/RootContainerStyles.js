import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '@mobile/Themes/';

export default StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.margin.base,
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
