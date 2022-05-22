import React, { Component } from 'react'
import store from '../../redux/store'
import QueueItem from './componments/queueItem'
import "./index.css"

export default class Queue extends Component {

    state = {
        isOpen: false,
        musics: [],
        isPlaying: false
    }

    componentDidMount = () => {
        store.subscribe(() => {
            let { isOpen, musics, nowId } = store.getState()
            this.setState({
                isOpen,
                musics,
                nowId
            })
        })
    }

    isClose = () => {
        store.dispatch({ type: "isOpen", isOpen: !this.state.isOpen })
    }

    deleteAll = () => {
        store.dispatch({ type: "deleteAll" })
    }

    render() {
        let { musics } = this.state
        return (
            <div className={this.state.isOpen ? 'queue isopen' : 'queue'} >
                <div className="queue-header">
                    <h2>播放队列</h2>
                    <div className="queue-header-section">
                        <span className="queue-number">{musics.length}首</span>
                        <div className="queue-active">
                            <span className="iconfont">&#xe60b;</span>
                            <span className="iconfont" onClick={this.deleteAll}>&#xe662;</span>
                        </div>
                    </div>
                </div>


                <div className="queue-inner">
                    {musics.map((item) => {
                        return (
                            <QueueItem
                                albumName={item.song ? item.song : item.songName}
                                id={item.id}
                                time={item.time}
                                name={item.name ? item.name : item.singer}
                                key={item.id}
                                song={item.songName}
                                songResource={item.songResource}
                                picUrl={item.picUrl}
                            />
                        )
                    })}
                </div>


                <div className="queue-footer">
                    <div className="queue-bar"></div>
                    <div className="queue-close" onClick={this.isClose}>
                        <span className="iconfont">&#xea61;</span> 收起
                    </div>
                </div>

            </div>
        )
    }
}
