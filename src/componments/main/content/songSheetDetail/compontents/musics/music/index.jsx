import React, { Component } from "react";
import "./index.css";
import store from "../../../../../../../redux/store";


export default class music extends Component {

  onClick=()=>{
    store.dispatch({type:'music',payload:this.props,nowId:this.props.id})
}

  render() {
    return (
        <div className="song-list" onDoubleClick={this.onClick}>
          <div className="song-list-name">
            <div>
              <span className="iconfont love">&#xe8c4;</span>
              &nbsp;&nbsp;&nbsp;{this.props.song}
            </div>
            <div className="song-list-icon">
              <span className="iconfont position ">&#xea6d;</span>&nbsp;
              <span className="iconfont position ">&#xeaf3;</span>&nbsp;
              <span className="iconfont position ">&#xe62a;</span>&nbsp;
              <span className="iconfont position ">&#xe608;</span>&nbsp;
            </div>
          </div>
          <div className="song-list-author">{this.props.name}</div>
          <div className="song-list-index3">{this.props.albumName}</div>
          <div className="song-list-index3">{this.props.time}</div>
        </div>
    );
  }
}
