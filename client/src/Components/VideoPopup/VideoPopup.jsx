import "../../style.css";

const VideoPopup = ({ video, onClose }) => (
  <div className="overlay">
    <div className="video-popup">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <iframe
        width="896"
        height="504"
        src={video.url}
        title="YouTube video player"
        allow="web-share"
      ></iframe>
    </div>
  </div>
);

export default VideoPopup;
