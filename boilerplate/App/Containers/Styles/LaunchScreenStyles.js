import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '@mobile/Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.margin.base,
  },
  logo: {
    marginTop: Metrics.margin.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
});
