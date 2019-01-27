import React from 'react';

class VideoDetail extends React.Component {

  render() {
    console.log(this.props.video);
    if (!this.props.video) {
      return <div>Loading...</div>
    }


    let video = this.props.video;
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <iframe src={videoSrc} />
        <h4>{video.snippet.title}</h4>
        <h5>{video.snippet.description}</h5>
      </div>
    );
  }
}
export default VideoDetail;