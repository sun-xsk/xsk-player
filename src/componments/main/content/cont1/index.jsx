import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemBig1 from "./componments/big1";
import ItemBig from "./componments/big2";
import ItemSmall from "./componments/small";

import "./index.css";

export default class cont1 extends Component {
  state = {
    isLoading: true,
    result1: [],
    result2: [],
  };

  componentDidMount() {
    axios.get("https://www.yushangyun.top:4005/recommend").then((res) => {
      this.setState({ result1: res.data.result.playlists, isLoading: false });
    });

    axios.get("https://www.yushangyun.top:4005/randomSongs").then((res) => {
      this.setState({ result2: res.data.result });
    });
  }

  render() {

    const { isLoading, result1, result2 } = this.state;
    const arr1 = result1.slice(0, 12);
    const arr2 = result1.slice(12, 18);
    const arr3 = result1.slice(18, 24);
    const arr4 = result1.slice(24, 30);
    const arr5 = result2.slice(0, 6);
    const arr6 = result2.slice(6, 10);
    return isLoading ? (
      <div>加载中...</div>
    ) 
    : (
      <div className="cont1-father">
        <h1>推荐</h1>
        <div className="cont1-title">Hi 今日为你推荐</div>
        <div className="cont1-children1x">
          <div className="div">
            <ItemBig1
              img="http://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000"
              title="每日30首"
            />
          </div>
          <div className="div">
            <ItemBig1
              img="http://y.qq.com/music/common/upload/t_music_radio/1260297.jpg?max_age=2592000"
              title="百万收藏"
            />
          </div>
          <div className="div">
            <ItemBig1
              img="http://y.qq.com/music/common/upload/t_music_radio/1652761.jpg?max_age=2592000"
              title="新歌推荐"
            />
          </div>
        </div>

        <div className="cont1-title">你的歌单保障库</div>
        <div className="cont1-children1">
          {arr1.map((item, index) => {
            return (
              <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                <div>
                  <ItemBig key={item.id}
                    img={item.picUrl}
                    title={item.name}
                    playCount={item.playCount}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="cont1-title">大家都在听</div>
        <div className="cont1-children2">
          {arr5.map((item, index) => {
            return (
              <div key={item.id}>
                <ItemSmall
                  img={item.picUrl}
                  title={item.songName}
                  name={item.singer}
                />
              </div>
            );
          })}
        </div>

        <div className="cont1-title">符合你最近的音乐</div>
        <div className="cont1-children1">
          {arr2.map((item, index) => {
            return (
              <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                <div key={item.id}>
                  <ItemBig
                    img={item.picUrl}
                    title={item.name}
                    playCount={item.playCount}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="cont1-title">如何？换个口味吧</div>
        <div className="cont1-children1">
          {arr3.map((item, index) => {
            return (
              <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                <div key={item.id}>
                  <ItemBig
                    img={item.picUrl}
                    title={item.name}
                    playCount={item.playCount}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="cont1-title">你的私人推荐</div>
        <div className="cont1-children2">
          {arr6.map((item, index) => {
            return (
              <div key={item.id}>
                <ItemSmall
                  img={item.picUrl}
                  title={item.songName}
                  name={item.singer}
                />
              </div>
            );
          })}
        </div>

        <div className="cont1-title">你的喜爱</div>
        <div className="cont1-children1">
          {arr4.map((item, index) => {
            return (
              <Link to={`/songSheetDetail/${item.id}`} key={item.id}>
                <div key={item.id}>
                  <ItemBig
                    img={item.picUrl}
                    title={item.name}
                    playCount={item.playCount}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
