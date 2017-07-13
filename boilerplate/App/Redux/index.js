/* eslint-disable global-require */
import { combineReducers } from 'redux';
import configureStore from '@mobile/Redux/CreateStore';
import rootSaga from '@mobile/Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('@mobile/Redux/NavigationRedux').reducer,
    github: require('@mobile/Redux/GithubRedux').reducer,
    search: require('@mobile/Redux/SearchRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
