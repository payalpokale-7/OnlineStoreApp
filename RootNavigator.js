import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { userReducer } from '../redux/reducers/userReducer'; // Import your user reducer
import { productReducer } from '../redux/reducers/productReducer'; // Import your product reducer
import AppNavigator from './AppNavigator';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default RootNavigator;
