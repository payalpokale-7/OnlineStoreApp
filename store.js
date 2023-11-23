// store.js
import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer'; // Adjust the path based on your project structure

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;
