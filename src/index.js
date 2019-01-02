import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux"
const initialState =
{
  result:1,
  lastValue:[]

}
const calculReducer= (state=initialState, action)=>
{
  switch(action.type)
  {
    case "ADD":
     state={
       ...state,
       result:state.result + action.payload,
       lastValue:[...state.lastValue,action.payload]
     }
    
    break;
    case "SUB":
    state={
      ...state,
      result:state.result - action.payload,
      lastValue:[...state.lastValue,action.payload]
    }
    break;
  }
  return state;
}
const store =createStore(calculReducer,applyMiddleware(logger ))
store.subscribe(()=>{
  console.log("store update",store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
