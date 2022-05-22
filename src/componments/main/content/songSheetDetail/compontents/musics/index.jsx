import React, { Component } from "react";
import { useParams} from "react-router-dom";
import store from "../../../../../../redux/store";
import Music from "./music";

class musics extends Component {

  render() {
    const data = store.getState().details;
    return (
      <div>
        {data.map((item, index) => {
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
    );
  }
}

function withRouter(Child) {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params}/>;
  };
}

export default withRouter(musics);
