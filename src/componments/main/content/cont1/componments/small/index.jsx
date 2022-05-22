import React, { Component } from 'react'
import "./index.css"

export default class small extends Component {
  render() {
    return (
      <div className="itemSm">

        <div className="itemSm-left">
          <img src={this.props.img} alt="" />
        </div>

        <div className="itemSm-right">
          <p className="itemSm-right-title">{this.props.title}</p>
          <p className="itemSm-right-name">{this.props.name}</p>
          <span className="iconfont position1 ico">&#xea6d;</span>
          <span className="iconfont position2 ico">&#xeaf3;</span>
          <span className="iconfont position3 ico">&#xe62a;</span>
          <span className="iconfont position4 ico">&#xe608;</span>
        </div>

      </div>
    )
  }
}
