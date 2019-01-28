import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YoutubeSearch'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class App extends React.Component {
  state = { videoList: [] , selectedVideo: null};

  processSearch = async (term) => {
    const response = await youtube.get("/search", {params: {q: term}});
    this.setState({videoList: response.data.items, selectedVideo: response.data.items[0]});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container"> 

          <SearchBar searchFunction={this.processSearch}/>
          <div className="ui stackable grid">
            <div className="ui row">

              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList 
                  onVideoSelect={this.onVideoSelect} 
                  selectedVideo={this.state.selectedVideo} 
                  videoList={this.state.videoList}
                />
              </div>
            </div>
          </div>

      </div>
    );
  }
}
export default App;