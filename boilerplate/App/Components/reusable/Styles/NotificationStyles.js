import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@mobile/Themes';

const commonTextStyle = {
  fontSize: Fonts.size.regular,
};

const commonContainer = {
  paddingHorizontal: Metrics.margin.small,
  backgroundColor: Colors.success,
  height: Metrics.height.notification,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  successContainer: {
    ...commonContainer,
    backgroundColor: Colors.success
  },
  successText: {
    ...commonTextStyle,
    color: Colors.white,
  },
  failureContainer: {
    ...commonContainer,
    backgroundColor: Colors.error
  },
  failureText: {
    ...commonTextStyle,
    color: Colors.white
  },
  statelessContainer: {
    ...commonContainer,
    backgroundColor: Colors.steel
  },
  statelessText: {
    fontSize: Fonts.size.small,
    color: Colors.black
  },
});
