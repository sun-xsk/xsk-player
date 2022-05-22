import React, { Component } from "react";
import "./index.css";

export default class big2 extends Component {
  getNum(a){
    let res = (a-a%1000)/10000 + '万';
    return res;
  }

  render() {
    return (
      <div className="item-father">
        <div className="item-img">
          <img src={this.props.img} alt="" />
          <div className="item-icon">
            <span className="iconfont item-icon-item">&#xe717;</span>
          </div>
          <div className="item-icon2">
            <div>
            <span className="iconfont">&#xe638;</span> {this.getNum(this.props.playCount)}
            </div>
          </div>
        </div>
        <p className="item-title">{this.props.title}</p>
      </div>
    );
  }
}
