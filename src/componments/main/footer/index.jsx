import React, { Component } from "react";
import "./index.css";
import Lyric from "../../lyric"
import store from "../../../redux/store.js"
import { dragDot, setVolume } from "./tools.js"

export default class footer extends Component {
  state = {
    isPlaying: false,
    nowMusic: "暂时没有歌曲信息...",
    nowName: "无",
    albumName: '无',
    nowId: 0,
    nowSouce: '',
    endTime: "00:00",
    music: [],
    nowTime: "00:00",
    time: 0,
    isOpen: false,
    isOpenlyric: false,
    volume: "50%",
    nowImg: "http://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000"
  };

  componentDidMount = () => {
    store.subscribe(() => {
      if (store.getState().musics[0] === undefined) {
        this.setState({
          isPlaying: false,
          nowMusic: "暂时没有歌曲信息...",
          nowName: "无",
          albumName: '无',
          nowId: 0,
          nowSouce: '',
          endTime: "00:00",
          music: [],
          nowTime: "00:00",
          nowImg: "http://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000",
          isOpen: store.getState().isOpen,
        })
      } else {
        this.setState({
          music: store.getState().musics,
          nowIndex: store.getState().musics.length - 1,
          isOpen: store.getState().isOpen,
          nowId: store.getState().nowId
        })
        setTimeout(() => {
          this.getNow(this.state.nowId)
          this.start()
        })
      }

    })
    this.audio.addEventListener('timeupdate', this.update)
    dragDot(this.button, this.audio, document.body.clientWidth-210)
    setVolume(this.audio, this.volumeBall, this.volumeBar, this)
    this.proc.addEventListener('mousedown', this.prcoClick)
    this.procBackground.addEventListener('mousedown', this.prcoClick)
    this.audio.addEventListener('ended', this.nextMusic)
  }

  prcoClick = (e) => {
    if (!this.audio.paused || this.audio.currentTime !== 0) {
      let a = e.offsetX / (document.body.clientWidth-210);
      this.audio.currentTime = this.audio.duration * a;
    }
  }

  update = () => {
    this.setState({ nowTime: this.change(this.audio.currentTime), time: this.audio.currentTime })
    let percent = this.audio.currentTime / this.audio.duration * 100 + "%";
    this.proc.style = `width:${percent}`
    this.button.style = `left:${percent}`
  }

  // 将秒转为分
  change = (time) => {
    let a = '';
    let m = parseInt(time / 60);
    let s = parseInt(time % 60);
    a += m / 10 < 1 ? ('0' + m) : m;
    a += ":"
    a += s / 10 < 1 ? ('0' + s) : s;
    return a;
  }

  getNow = (nowId) => {
    let index = this.state.music.findIndex(music => music.id === nowId);
    if (this.state.music[index] !== undefined) {
      const { song, picUrl, songResource, name, albumName, songName, singer } = this.state.music[index];
      this.setState({
        isPlaying: true,
        nowMusic: song ? song : songName,
        nowName: name ? name : singer,
        nowSouce: songResource,
        nowImg: picUrl,
        nowIndex: index,
        albumName
      })
    }
  }

  getNow2 = (index) => {
    const { id, song, picUrl, songResource, name } = this.state.music[index];
    this.setState({
      isPlaying: true,
      nowMusic: song,
      nowName: name,
      nowId: id,
      nowSouce: songResource,
      nowImg: picUrl,
    })
  }

  start = () => {
    this.audio.addEventListener("canplaythrough", this.play)
    // store.dispatch({ type:'audio',audio: this.audio})
    this.setState({ audio: this.audio })
  }

  play = () => {
    this.setState({ endTime: this.change(this.audio.duration) })
    this.audio.play()
    this.audio.removeEventListener("canplaythrough", this.play)
  }

  pause = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    })
    this.state.isPlaying ? this.audio.pause() : this.audio.play();
  }

  nextMusic = () => {
    let endMusicIndex = this.state.music.length - 1;
    let now = this.state.nowIndex;
    if (now === endMusicIndex) {
      now = 0;
      this.setState({ nowIndex: now })
      store.dispatch({ type: 'nowId', nowId: this.state.music[now].id })
    } else {
      now = now + 1;
      this.setState({ nowIndex: now })
      store.dispatch({ type: 'nowId', nowId: this.state.music[now].id })
    }

  }

  preMusic = () => {
    let endMusicIndex = this.state.music.length - 1;
    let now = this.state.nowIndex;
    if (now === 0) {
      now = endMusicIndex;
      this.setState({ nowIndex: now })
      store.dispatch({ type: 'nowId', nowId: this.state.music[now].id })
    } else {
      now = now - 1;
      this.setState({ nowIndex: now })
      store.dispatch({ type: 'nowId', nowId: this.state.music[now].id })
    }
  }

  isOpen = () => {
    store.dispatch({ type: "isOpen", isOpen: !this.state.isOpen })
  }

  isOpenlyric = () => {
    store.dispatch({ type: "isOpenlyric", isOpenlyric: true })
  }

  volumeControl = () => {
    if (this.volumeController.style.display === "block") {
      this.volumeController.style.display = "none"
    } else {
      this.volumeController.style.display = "block"
    }

  }

  render() {
    return (
      <div className="footer">
        <div className="footer-bar" onMouseOut={this.buttonOut} onMouseOver={this.buttonOver}>
          <div className="bar-process-background" ref={(procBackground) => { this.procBackground = procBackground; }}>
            <p className="bar-process" ref={(proc) => { this.proc = proc; }}></p>
            <p className="bar-button" ref={(button) => { this.button = button }} style={this.state.isPlaying ? { display: 'block' } : { display: 'none' }}></p>
          </div>
        </div>

        <audio src={this.state.nowSouce} ref={(audio) => { this.audio = audio }}></audio>

        <div className="footer-left">
          <div className="footer-left-father">
            <img src={this.state.nowImg} alt="" className="img2" />
            <div className="vauge" onClick={this.isOpenlyric}><span className="iconfont uparror">&#xe63a;</span></div>
          </div>

          <div>
            <div className="footer-song-detail-ellipsis">
              <span className="footer-song-name">{this.state.nowMusic}</span>
              <span className="footer-song-deal">-{this.state.nowName}</span>
            </div>

            <div className="footer-song-icon">
              <span className="iconfont icon-like">&#xe8c4;</span>
              <span className="iconfont icon-yunxiazai1">&#xe62a;</span>
              <span className="iconfont ellipsis">&#xe608;</span>
            </div>
          </div>
        </div>

        <div className="footer-center">
          <span className="iconfont icon-green">&#xe603;</span>
          <span className="iconfont icon-green" onClick={this.preMusic}>&#xe63c;</span>
          {
            this.state.isPlaying ?
              <span className="iconfont" onClick={this.pause}>&#xe635;</span> :
              <span className="iconfont" onClick={this.pause}>&#xe717;</span>
          }
          <span className="iconfont icon-green" onClick={this.nextMusic}>&#xe63e;</span>
          <span className="iconfont icon-green" onClick={this.volumeControl}>&#xe87a;</span>
        </div>

        <div className="footer-right">
          <span className="startTime">{this.state.nowTime}/</span>
          <span className="endTime">{this.state.endTime}</span>
          <span className="ci">词</span>
          <span className="iconfont icon-green cur" onClick={this.isOpen}>&#xea61;</span>
        </div>

        <div className="volume-box" style={{ display: 'none' }} ref={(volumeController) => { this.volumeController = volumeController }}>
          <div className="volume-bar">
            <p className="volume-bar-process" ref={(volumeBar) => { this.volumeBar = volumeBar }} style={{ height: "50px" }}></p>
            <span className="volume-bar-ball" ref={(volumeBall) => { this.volumeBall = volumeBall }} style={{ bottom: "50px" }}></span>
          </div>
          <div className="volume-percent">{this.state.volume}</div>
        </div>

        <Lyric {...this.state} />
      </div>

    );
  }

}

