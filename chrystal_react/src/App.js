import React, { Component } from "react";
import "./App.css";

import BoxContainer from "./containers/click_box";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
