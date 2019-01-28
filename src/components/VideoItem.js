import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  

  render() {
    let video = this.props.video;
    console.log(video);

    return (
      <div onClick={()=> this.props.onVideoSelect(video)} className="item video-item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          {video.snippet.channelTitle}
        </div>
      </div>

      
    );
  }
}
export default VideoItem;