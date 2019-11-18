import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [thunk];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(...middleware)
 )
);export default store;
