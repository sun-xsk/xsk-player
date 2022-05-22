import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class nav1 extends Component {
  render() {
    return (
      <div className="nav">
        <span className="nav-title">在线音乐</span>
        <NavLink to="/recommend">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe8c3;</span> &nbsp;推荐
            </span>
          </div>
        </NavLink>

        <NavLink to="/musicHome">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe6b2;</span> &nbsp; 音乐馆
            </span>
          </div>
        </NavLink>

        <NavLink to="/video">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe656;</span> &nbsp; 视频
              <div></div>
            </span>
          </div>
        </NavLink>

        <NavLink to="/radio">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe61b;</span> &nbsp; 电台
            </span>
          </div>
        </NavLink>
      </div>
    );
  }
}
