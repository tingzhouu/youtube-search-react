import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {

    if (this.props.videoList.length === 0) {
      return null;
    }
    
    let videoList = this.props.videoList;
    let selectedVideo = this.props.selectedVideo;
    let notSelectedVideos = videoList.slice(0);


    for (let i = 0; i < notSelectedVideos.length; i++) {
      if (selectedVideo.id.videoId === notSelectedVideos[i].id.videoId) {
        notSelectedVideos.splice(i, 1);
      }
    }

    let videoListToRender = notSelectedVideos.map((video) => {
      return (
          <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video}/>
      );
    })

    return (
      <div className="ui relaxed divided list">{videoListToRender}</div>
    );
      
  }
}
export default VideoList;