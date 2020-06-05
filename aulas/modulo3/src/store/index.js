import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers'; // Se refere ao combineReducers

// const composer =
//   process.env.NODE_ENV === 'development'
//     ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
//     : applyMiddleware(...[]);

const store = createStore(reducers); //,composer

export default store;
