import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "../../../redux/store";
import "./index.css";
import header from "./header.jpg";

export default class headers extends Component {

  set = () => {
    this.setState({ need: this.need.value })
    let value = this.need.value
    axios(`https://www.yushangyun.top:4000/search?offset=0&keyWords=${value}`).then((res) => {
      store.dispatch({ type: 'searchResult', searchResult: res.data.result })
    })
  }

  render() {
    return (
      <div className="headers">
        <span className="iconfont left">&#xe62e;</span>
        <span className="iconfont right">&#xe62f;</span>
        <div className="input">
          <input type="text" className="cont" placeholder="搜索歌曲" ref={(need) => { this.need = need }} />
          <Link to="/search">
            <span className="iconfont search" onClick={this.set}>&#xe606;</span>
          </Link>
        </div>

        <span className="iconfont music">&#xe617;</span>
        <img src={header} alt="" className="img1" />
        <div className="name">野风</div>
        <span className="iconfont more">&#xe617;</span>
        <span className="iconfont cloth">&#xe8c7;</span>
        <span className="iconfont more2">&#xe600;</span>

      </div>
    );
  }
}
