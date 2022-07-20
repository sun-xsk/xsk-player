import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Item from "../../../cont1/componments/big2"
import "./index.css"

export default class select extends Component {

  state = {
    isLoading: true,
    result: []
  };

  componentDidMount() {
    axios.get("https://www.yushangyun.top:4005/playLists?offset=0").then((res) => {
      this.setState({ result: res.data.result.playlists, isLoading: false });
    });

  }

  render() {
    const { isLoading, result } = this.state;
    const list1 = result.slice(0, 6);
    const list2 = result.slice(6,12);
    const list3 = result.slice(12,18)


    return isLoading ? (
      <div>加载中...</div>
    ) : (
      <div>
        <div className="con2-select-titlebox">
          <span className="cont2-select-title">官方歌单</span>
          <span className="cont2-select-title2">官方甄选订阅歌单</span>
        </div>
        <div className="cont2-select-boxs">
            {
              list1.map((item) => {
                return (
                  <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                    <div>
                      <Item
                        img={item.coverImgUrl}
                        title={item.name}
                        playCount={item.playCount}
                      />
                    </div>
                  </Link>
                );
              })
            }
          </div>
          
        <div className="con2-select-titlebox">
          <span className="cont2-select-title">推荐歌单</span>
          <span className="cont2-select-title2">官方甄选歌单</span>
        </div>
        <div className="cont2-select-boxs">
            {
              list2.map((item) => {
                return (
                  <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                    <div>
                      <Item
                        img={item.coverImgUrl}
                        title={item.name}
                        playCount={item.playCount}
                      />
                    </div>
                  </Link>
                );
              })
            }
          </div>

        <div className="con2-select-titlebox">
          <span className="cont2-select-title">精选歌单</span>
          <span className="cont2-select-title2">都是你最爱听</span>
        </div>
        <div className="cont2-select-boxs">
            {
              list3.map((item) => {
                return (
                  <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                    <div>
                      <Item
                        img={item.coverImgUrl}
                        title={item.name}
                        playCount={item.playCount}
                      />
                    </div>
                  </Link>
                );
              })
            }
          </div>
      </div>
    )
  }
}
