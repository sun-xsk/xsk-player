import React, { Component } from 'react'
import axios from 'axios'
import store from '../../redux/store'
import "./index.css"


export default class Lyric extends Component {

    state = {
        isOpenlyric: false,
        lineNow: 0,
        nowId: 0,
    }

    componentDidMount() {
        store.subscribe(() => {
            let { isOpenlyric, nowId } = store.getState()
            this.setState({ isOpenlyric })
            if (nowId !== this.state.nowId) {
                this.setState({ nowId, lineNow: 0 })
                setTimeout(() => {
                    axios(`https://www.yushangyun.top:4000/lyric?id=${this.state.nowId}`).then((res) => {
                        let textarr = res.data.result.split("\n");
                        let lyric = [];
                        for (let i = 0; i < textarr.length; i++) {
                            let t = textarr[i].substring(textarr[i].indexOf("[") + 1, textarr[i].indexOf("]"));
                            lyric.push({
                                time: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
                                ci: textarr[i].substring(textarr[i].indexOf("]") + 1, textarr[i].length)
                            });
                        }
                        this.setState({ lyric })
                    }).then(() => {
                        let { audio } = this.props
                        this.setState({ audio: audio })
                        if (audio) {
                            console.log('start');
                            audio.addEventListener('timeupdate', this.start)
                            this.setState({ isListening: true })
                        }
                    })
                });
            }
        })
    }

    start = () => {
        if (this.state.lyric[this.state.lineNow].time <= this.state.audio.currentTime) {
            this.setState({ lineNow: this.state.lineNow + 1 })
            let a = this.scroll.scrollHeight / this.state.lyric.length
            this.scroll.scrollTop = (this.state.lineNow-1) * a
        } else if (this.state.lyric[this.state.lineNow - 1].time > this.state.audio.currentTime) {
            this.setState({ lineNow: this.state.lineNow - 1 })
            let a = this.scroll.scrollHeight / this.state.lyric.length
            this.scroll.scrollTop = (this.state.lineNow-1) * a
        }

    }

    close = () => {
        store.dispatch({ type: "isOpenlyric", isOpenlyric: false })
    }

    render() {
        return (
            <div className="Lyric-father" style={{ display: this.state.isOpenlyric ? 'block' : 'none' }}>
                <div className="Lyric-img">
                    <img src={this.props.nowImg} alt="" ></img>
                </div>
                <div className="Lyric-vague"></div>
                <span className="iconfont dwonError green" onClick={this.close}>&#xe63d;</span>
                <div className="Lyric-article">
                    <div className="Lyric-article-left">
                        <img src={this.props.nowImg} alt=''></img>
                    </div>
                    <div className="Lyric-article-right">
                        <div className="Lyric-article-right-content">
                            <h2>{this.props.nowMusic}</h2>
                            <div className="Lyric-name">歌手：{this.props.nowName}</div>
                            <div className="Lyric-name">专辑：{this.props.albumName}</div>
                            <div className="Lyric-detail" ref={(scroll) => { this.scroll = scroll }}>
                                <header className="Lyric-detail-header"></header>
                                {
                                    this.state.lyric ? this.state.lyric.map((item, i) => {
                                        return <div className={this.state.lineNow === i + 1 ? "lyric-playing" : "Lyric-ci"} key={i}>
                                            {item.ci}
                                        </div>
                                    }) : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
