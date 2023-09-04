import Thumbnail from "./Thumbnail";
import "../../style.css";

const ThumbnailsList = ({ datas, onThumbnailClick }) => (
  <>
    <div className="thumbnails">
      {datas && datas.map((data) => (
        <Thumbnail key={data._id} data={data} onClick={onThumbnailClick} />
      ))}
    </div>
  </>
);

export default ThumbnailsList;
