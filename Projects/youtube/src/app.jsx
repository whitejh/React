import React, { useEffect, useState } from 'react';
import "./app.css";
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]); // 비디오 목록

  useEffect(() => {
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD2Aj5UuP9zQ-YLFdIyTA2EqgJgL-yM5p0", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
    }, []); // 빈 배열을 2번째 인자로 전달하면 마운트가 되었을 때만 호출

  return <VideoList videos={videos} />;
}

export default App;

