import "../../style.css";

const Thumbnail = ({ data, onClick }) => (
  <div className="thumbnail" onClick={() => onClick(data)}>
    <img src={data.thumbnailUrl} alt={data.name} />
  </div>
);

export default Thumbnail;
