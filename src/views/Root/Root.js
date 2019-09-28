import React from "react";
import "./index.css";
// import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';


class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;