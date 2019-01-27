import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/YoutubeSearch'
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {videoList: []};

  processSearch = async (term) => {
    const response = await youtube.get("/search", {params: {q: term}});
    this.setState({videoList: response.data.items});
  }

  render() {
    return (
      <div> 
        <SearchBar searchFunction={this.processSearch}/>
        <VideoDetail video={this.state.videoList[0]}/>
      </div>
    );
  }
}
export default App;