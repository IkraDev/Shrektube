import React, { useState } from "react";
import VideoPopup from "../VideoPopup/VideoPopup";
import ThumbnailsList from "../Thumbnail/ThumbnailsList";
import "../../style.css";

const DataList = ({ datas }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleThumbnailClick = (data) => {
    setSelectedVideo(data);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="data-list-container">
        <ThumbnailsList datas={datas} onThumbnailClick={handleThumbnailClick} />
        {selectedVideo && <VideoPopup video={selectedVideo} onClose={handleCloseVideo} />}
    </div>
  );
};

export default DataList;
