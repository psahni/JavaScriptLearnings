#- Export/Import

import React, { Component } from 'react';

const SearchBar = () => {
  return <input/>;
}

export default SearchBar;

#- index.ejs

import SearchBar from search_bar;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

# - search_bar.js

# functional component
# class based component. ES6 class.

#- functional component just takes some props

#- Search Bar.

import React, { Component } from 'react';

# Or

# const Component = React.Component;

class SearchBar extends Component {

  # Every class must have this method

  render() {
      return (
        <input onChange={this.onInputChange}/>; or <input onChange={ event => console.log(event.target.value) } />;
      )
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

}

export default SearchBar

#-
#- Event Handling

#- States

# Whenever a state changes, a Component gets re rendered.
# Only class based components have states, functional component does not have states.
# State is plain JavaScript object, that exists on class based component.
# State can only be changed with setState function.

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''};
  }

  render() {
      return (
        <div>
          <input onChange={ event => this.setState({ term: event.target.value }) } />;
          Value of the input: { this.state.term }
        </div>
      )
  }
}

#- Controlled Components

render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value }) } />;
        Value of the input: { this.state.term }
      </div>
    )
}

# In the above code, value={this.state.term} - controlled input. This is an example controlled component. We are controlling the value through state. State is telling value to update.

#- Fetching list of videos
# The most parent component should be responsible for fetching data. Top level component.

import React, { Component } from 'react';
import YTSearch;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };  
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos }); // key and property should be of same name.
    });
  }

  render() {
    return(
      <div>
        <SearchBar/>
      </div>
    );
  }
}

# video_list.js
import React from 'react';

const VideoList = (props) => {
  const videos = props.videos;
  return(
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
}

export default VideoList;

In index.js

import VideoList from './Components/video_list';

...
  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}>
      </div>
    )
  }
...

#- The data that we are passing from App to VideoList, is called props.
#- In class based component, props are available anywhere as 'this.props';

# Building list with Maps:-

in video_list.js

import VideoListItem from './video_list_item';
...

const VideoListItem = () => {
    return(
       <li>Video</li>
    )
}

#- Using map is always good option than simple for-loop.

#- In VideoList

const VideoList = (props) => {
    const videoListItems = props.videos.map((video) => {
       return <VideoListItem key={video.etag} video={video} />   // React identifies that we r rendering list, so we have to give key.
    });

    return(
        <ul>
            {videoListItems}
        </ul>
    )
}

# - VideoListItem

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (<li className="list-group-item">
       <div className="video-list-media">
        <div className="media-left">
           <img className="media-object" src={imageUrl}>
        </div>
       </div>
       <div className="media-body">
         <div className="media-heading">
            {video.snippet.title}
         </div>
       </div>
    </li>)
}

#- VideoDetail

const VideoDetail = ({video}) => {
    const videoId = video.id.videoId;
    const url = `https//youtube.com/embed/${videoId;}`;

    return(
        ...
        <iframe src={url}></iframe>
        ...
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    )
}

export default VideoDetail

#- In index.js

import VideoDetail from './components/video_detail';

render(){
    return(
        ..
        <VideoDetail />
        <VideoList videos={this.state.videos}/>
    )
}

#- In VideoDetail

if (!video)  {
    <div>Loading...</div>
}

#- Some times parent is not fast enough to pass the required props into child component.

#- In index.js

this.state = { videos:[], selectedVideo: null };

..

this.setState({
    videos: videos,
    selectedVideo: videos[0]
});

..

render(){
   <VideoDetail video={this.state.selectedVideo} />
}

# Passing Down Callback from Parent to child component.

#- index.js

<VideoList onVideoSelect={(video) => this.setState(selectedVideo: video) } />
OR..
<VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
#- VideoList


 props.videos.map..
    <VideoListItem onVideoSelect={props.onVideoSelect}/>


# VideoListItem

const VideoListItem = ({video, onVideoSelect}) => {

    return(
        <li onClick={() => onVideoSelect(video)} />
    )

}


# Continue from video 31
#- index.js

Wrap YTSearch into videoSearch:-


videoSearch(term) {
  ...
}

..from constructor of App call this.videoSearch('surfboards');

#- search_bar.js

render() {
  return(
      <div className="search-bar">
        <input value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
}

onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
}

#- index.js

<SearchBar onSearchTermChange={term => this.videoSearch(term)} />

# Throttle
#- To make sure the search query do not fire every time user types, we will use debounce.

const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // Call it after very 300 milliseconds.
<SearchBar onSearchTermChange={videoSearch} />
