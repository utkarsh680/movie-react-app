import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore} from 'redux';
import App from './components/App';
import movies from './reducers';

const store  = createStore(movies);
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

