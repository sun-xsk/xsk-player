import React, { Component } from 'react';
import "./index.css";
import Header from "./componments/header"
import Nav1 from "./componments/nav1"
import Nav2 from "./componments/nav2"
import Nav3 from "./componments/nav3"

export default class sections extends Component {
  render() {
    return (
      <div className="sections">
          <Header/>
          <Nav1/>
          <Nav2/>
          <Nav3/>
      </div>
    )
  }
}
