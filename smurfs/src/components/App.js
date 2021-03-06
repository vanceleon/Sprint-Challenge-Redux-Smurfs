import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import {BrowserRouter as Router} from 'react-router-dom';

// import Header from "./Header";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

//actions
import { getSmurfs } from "../actions";

import "./App.css";
// import { smurfsReducer } from "../reducers/smurfsReducer";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {/* <Route exact path ='/' component={Header}/> */}
        <Route
          path="/smurfs"
          component={SmurfForm}
        /> 
        
        <Route
          path="/smurfs"
          component={SmurfList}
        /> 
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
