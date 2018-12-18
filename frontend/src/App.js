import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Welcome from "./components/Welcome";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Welcome} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
