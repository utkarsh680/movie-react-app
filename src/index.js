import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';
import rootReducer from './reducers';

//first way right reducer
//function logger (obj, next, action) is is currying function
//logger(obj)(next)(action)
//*************************************************************** */
// const logger = function ({dispatch, getState}){
//   return function (next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE', action.type);
//       next(action);
//     }
//   }
// }
//*************************************************************** */
//second way right reducer
const logger = ({dispatch, getState}) => (next) => (action) => {
  //middleware code
  console.log('ACTION_TYPE', action.type);
  next(action);    
}

const store  = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store)
// console.log('BEFORE state', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
// console.log('After state', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store ={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

