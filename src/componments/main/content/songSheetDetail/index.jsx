import React, { Component } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import store from "../../../../redux/store";
import "./index.css";

class SongSheetDetail extends Component {
  state = {
    isLoading: true,
    result: {},
    state:'musics'
  };

  getDetails() {
    let id = this.props.params.id;
    axios
      .get(`https://www.yushangyun.top:4000/songsDetail?id=${id}`)
      .then((res) => {
        this.setState({
          isLoading: false,
          result: res.data.result,
        });
        store.dispatch({type:'sheetdetails',details:{details:res.data.result.details}})
      });
  }

  playAll=()=>{
    store.dispatch({type:"musics",musics:this.state.result.details,nowId:this.state.result.details[0].id})
  }

  render() {
    const { isLoading } = this.state;
    const { tags, details } = this.state.result;
    if (isLoading) {
      this.getDetails();
    }
    return isLoading ? (
      <div>加载中...</div>
    ) : (
      <div className="sheet-father">
        <div className="sheet-header">
          <div className="sheet-header-left">
            <img src={this.state.result.coverImgUrl} alt="" />
          </div>

          <div className="sheet-header-right">
            <h1 className="sheet-header-right-top">{this.state.result.name}</h1>
            <div className="sheet-header-cont">
              <img src={this.state.result.userImgUrl} alt="" />
              <div className="sheet-author">{this.state.result.nickname}</div>
              <div className="sheet-personal">{tags[0]}</div>
              <div className="sheet-personal">{tags[1]}</div>
              <div className="sheet-personal">{tags[2]}</div>
            </div>
            <div className="sheet-header-descriptor">
              {this.state.result.description}
            </div>
            <div className="sheet-header-btns">
              <div className="sheet-btn1" onClick={this.playAll}>
                <span className="iconfont">&#xea6d;</span> 播放全部
              </div>
              <div className="sheet-btn2">
                <span className="iconfont">&#xe761;</span> 收藏
              </div>
              <div className="sheet-btn3">
                <span className="iconfont">&#xe608;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sheet-title">
          <NavLink to={`/songSheetDetail/${this.props.params.id}/musics`}>
            歌曲{details.length}
          </NavLink>
          <NavLink to={`/songSheetDetail/${this.props.params.id}/commits`}>
            评论（暂未开通）
          </NavLink>
        </div>

        <div className="sheet-songs-title">
          <div>歌曲</div>
          <div>歌手</div>
          <div>专辑</div>
          <div>时长</div>
        </div>
        
        <Outlet/>
      </div>
    );
  }
}

function withRouter(Child) {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params}/>;
  };
}

export default withRouter(SongSheetDetail);
