import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class nav2 extends Component {
  render() {
    return (
      <div className="nav">
        <span className="nav-title">我的音乐</span>
        <NavLink to="/none1">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe761;</span> &nbsp; 我喜欢
            </span>
          </div>
        </NavLink>
        
        <NavLink to="/none2">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xeac4;</span> &nbsp; 本地和下载
            </span>
          </div>
        </NavLink>

        <NavLink to="/none3">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe675;</span> &nbsp; 最近播放
            </span>
          </div>
        </NavLink>

        <NavLink to="/none4">
          <div className="nav-content">
            <span className="text">
            &nbsp;&nbsp;
              <span className="iconfont">&#xe600;</span> &nbsp; 试听列表
            </span>
          </div>
        </NavLink>
      </div>
    );
  }
}
