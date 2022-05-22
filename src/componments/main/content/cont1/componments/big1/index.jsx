import React, { Component } from "react";
import "./index.css";

export default class big1 extends Component {
  render() {
    return (
      <div className="item-father">
        <div className="item-img">
          <img src={this.props.img} alt="" />
          <div className="item-icon">
            <span className="iconfont item-icon-item">&#xe717;</span>
          </div>
        </div>
        <p className="item-title">{this.props.title}</p>
      </div>
    );
  }
}
