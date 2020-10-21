import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

import '../config/ReactotronConfig'

// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMi() : null;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]


const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware( ...middlewares),
    console.tron.createEnhancer()
  )
  : applyMiddleware( ...middlewares)

const store = createStore(reducers, composer)

sagaMiddleware.run(sagas)

export default store;
