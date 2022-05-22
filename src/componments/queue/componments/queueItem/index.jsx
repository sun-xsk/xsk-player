import React, { Component } from 'react'
import store from '../../../../redux/store'
import "./index.css"

export default class queueItem extends Component {

  state = {
    nowId: "000",
  }

  componentDidMount() {
    this.setState({ nowId: store.getState().nowId })
    store.subscribe(() => {
      let { nowId } = store.getState()
      this.setState({
        nowId
      })
    })
  }

  delete = () => {
    store.dispatch({ type: 'delete', deleteId: this.props.id })
  }

  onClick = () => {
    store.dispatch({ type: 'music', payload: this.props, nowId: this.props.id })
  }

  render() {
    return (
      <div className="queue-item-father" onDoubleClick={this.onClick}>
        <div className={this.props.id === this.state.nowId ? "queue-item-left isChecked" : "queue-item-left"}>
          <div className="queue-item-albumname ellipsis2">{this.props.albumName}</div>
          <div className="queue-item-name ellipsis2">{this.props.name}</div>
        </div>
        <div className="queue-item-right">
          <span className={this.props.id === this.state.nowId ? "queue-item-right-item1 isChecked3" : "queue-item-right-item1 "}>{this.props.time}</span>
          <div className={this.props.id === this.state.nowId ? "queue-item-right-item2 isChecked2" : "queue-item-right-item2 "}>
            {
              this.props.id === this.state.nowId ?
                (<span className="iconfont green">&#xe663;</span>) :
                (<span className="iconfont green">&#xea6d;</span>)
            }
            <span className="iconfont icon-like">&#xe8c4;</span>&nbsp;
            <span className="iconfont green">&#xe62a;</span>&nbsp;
            <span className="iconfont green" onClick={this.delete}>&#xe662;</span>&nbsp;
          </div>
        </div>
      </div>
    )
  }
}
