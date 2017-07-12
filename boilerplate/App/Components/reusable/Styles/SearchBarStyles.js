import {StyleSheet} from 'react-native'
import { Fonts, Colors, Metrics } from '@mobile/Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.margin.small,
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    width: Metrics.width.screen - Metrics.margin.base,
  },
  searchInput: {
    flex: 5,
    height: Metrics.height.searchBar,
    alignSelf: 'center',
    padding: Metrics.margin.small,
    textAlign: 'left',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.instructions,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.snow,
    paddingLeft: 30,
    color: Colors.snow,
    flexDirection: 'row',
  },
  searchIcon: {
    left: Metrics.margin.doubleBase,
    alignSelf: 'center',
    color: Colors.snow,
    backgroundColor: Colors.transparent,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.margin.base,
  },
  buttonLabel: {
    color: Colors.snow,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
  },
})
