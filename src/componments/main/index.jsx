import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import Sections from "./sections";
import Headers from "./headers";
import Footer from "./footer";
import Content from "./content";
import Queue from '../queue';

export default class main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Sections />
          <Headers />
          <Content />
          <Footer />
          <Queue />
        </div>
      </BrowserRouter>

    )
  }
}
