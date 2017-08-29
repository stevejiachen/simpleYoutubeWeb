import React from 'react';
import VideoListItem from './video_list_item';
//why functional component instead of class-based component? the VideoList could
//change?
//refactor from function-based component -> class-based componet: props -> this.props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
