import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import Youtube search API
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD71tdbPviplyO4OLqFJmg84_2CR7lzuvM';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    //use youtube search api to get videos and update the state's videos array
    YTSearch({key: API_KEY, term:'surfboards'},(videos) => {
      this.setState({videos});
      //this.setState({videos:videos});
    })
  }

  render(){
    return(
      <div>
        <SearchBar/>
        {/*App pass videos data to VideoList via props*/}
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

ReactDOM.render(<App/>,document.querySelector('.container'));
