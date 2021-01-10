import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  // state = { videos: null, selectedVideo: null } // cannot accesss this.state.videos.length property
  state = { videos: [], selectedVideo: null }

  // only for making a default search when the compoennt first mounts to the screen
  componentDidMount(){
    this.onTermSubmit('plants');
  }

  // callback function defined as arrow function
  onTermSubmit = async (term) => {
    console.log(term)
    // youtube is now a preconfigured instance of axios
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response.data.items)
    // set the received videos as state on the app component
    // this will allow App component to update itself/ rerender itself. Which is going to allow us to render those newly fetched videos out as a list to the screen
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  // callback function defined as arrow function
  onVideoSelect = (video) => {
    // console.log('From the App', video);
    this.setState({ selectedVideo: video })
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;