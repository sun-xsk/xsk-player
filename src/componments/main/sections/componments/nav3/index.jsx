import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class nav3 extends Component {
  render() {
    return (
      <div className="nav">
        <span className="nav-title">创建的歌单</span>
        <NavLink to="/none5">
          <div className="nav-content">
          &nbsp;&nbsp;
            <span className="text"> who</span>
          </div>
        </NavLink>
        
        <NavLink to="/none6">
          <div className="nav-content">
          &nbsp;&nbsp;
            <span className="text"> 新建歌单</span>
          </div>
        </NavLink>

        <NavLink to="/none7">
          <div className="nav-content">
          &nbsp;&nbsp;
            <span className="text">最新音乐</span>
          </div>
        </NavLink>

        <NavLink to="/none8">
          <div className="nav-content">
          &nbsp;&nbsp;
            <span className="text"> 我最爱听</span>
          </div>
        </NavLink>
      </div>
    );
  }
}
