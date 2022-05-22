import React, { Component } from 'react'
import store from '../../../../redux/store';
import Music from '../songSheetDetail/compontents/musics/music';
import "./index.css"

export default class Search extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    store.subscribe(() => {
      let searchResult = store.getState().searchResult;
      this.setState({ list: searchResult, isLoading: false })
    })
  }

  render() {
    return this.state.list ? (<div className='search-father'>
      <div className='search-title'>
        <span className='search-title-checked'>歌曲</span>
        <span>视频</span>
        <span>专辑</span>
        <span>歌单</span>
        <span>歌手</span>
      </div>
      <div className="sheet-songs-title">
        <div>歌曲</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时长</div>
      </div>
      <div>
        {this.state.list.map((item, index) => {
          return (
            <div key={item.id}>
              <Music
                song={item.songName}
                name={item.singer}
                time={item.time}
                albumName={item.albumName}
                songResource={item.songResource}
                id={item.id}
                picUrl={item.picUrl}
              />
            </div>
          );
        })}
      </div>
    </div>) : (
      <h2>加载中...</h2>
    )
  }
}



