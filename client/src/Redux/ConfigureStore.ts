import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const ConfigureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeWithDevTools(...enhancers));
  return store;
};

export default ConfigureStore;
