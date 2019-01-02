import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux"


class App extends Component {
 
  render() {
    return (
      
     
      <div className="app">
        <button onClick={()=>this.props.ADD()}>ADD </button>
        <button onClick={()=>this.props.SUB()}>SUB </button>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state)=>
{
  return {
      result:state.result
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      ADD: ()=>
      {
        dispatch(
          {
              type:"ADD",
              payload:1
          }
        )
      },
      SUB:()=>
      {
        dispatch(
          {
              type:"SUB",
              payload:1
          }
        )
      }
     
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)
