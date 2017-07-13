import { StackNavigator } from 'react-navigation';
import LaunchScreen from '@mobile/Containers/LaunchScreen';

import styles from '@mobile/Navigation/Styles/NavigationStyles';

// Manifest of possible screens
const AppNavigation = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default AppNavigation;
