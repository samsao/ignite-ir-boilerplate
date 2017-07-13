import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from '@mobile/Navigation/AppNavigation';

// here is our redux-aware our smart component

type Props = {
  dispatch: () => any,
  navigation: any,
};

function ReduxNavigation(props: Props) {
  const { dispatch, navigation } = props;
  const appNavigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: navigation,
  });

  return <AppNavigation navigation={appNavigation} />;
}

const mapStateToProps = (state) => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
