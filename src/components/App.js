import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import PopUp from "./Pop-up-site/Content";

class App extends Component {
  render() {
    return (
    <Navbar/>,
    <PopUp/>
    );
  }
}

export default App;