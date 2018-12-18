import React, { Component } from "react";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
