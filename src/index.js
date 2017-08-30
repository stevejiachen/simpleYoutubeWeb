import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import Youtube search API
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD71tdbPviplyO4OLqFJmg84_2CR7lzuvM';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    //use youtube search api to get videos and update the state's videos array
    YTSearch({key: API_KEY, term:term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
      //this.setState({videos:videos}); ->this.setState({Vvideos})
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        {/*App pass videos data to VideoList via props*/}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }

}

ReactDOM.render(<App/>,document.querySelector('.container'));
