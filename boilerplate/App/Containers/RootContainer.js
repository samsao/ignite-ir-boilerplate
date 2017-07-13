import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ReduxNavigation from '@mobile/Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '@mobile/Redux/StartupRedux';
import ReduxPersist from '@mobile/Config/ReduxPersist';
import styles from '@mobile/Containers/Styles/RootContainerStyles';

type Props = {
  startup: () => any
};

class RootContainer extends Component {
  props: Props;

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
