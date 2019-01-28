import React from 'react';

class VideoDetail extends React.Component {

  render() {
    if (!this.props.video) {
      return null;
    }

    let video = this.props.video;
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="youtube video player" src={videoSrc} />
        </div>

        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
export default VideoDetail;