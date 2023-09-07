import React from "react";
import "./Destination.css";

const Destinations = () => {
  return (
    <div className="Sdestinations">
     <div className="STitle">
      TOP DESTINATIONS
    </div>
    <div className="Sfeatured">
 
      <div className="SfeaturedItem">
        <img
          src="https://www.ust.com/content/dam/ust/images/pr/press-releases/Thumbnail-USTs-BlueConch-Technologies-Opens-New-Delivery-Center-in-Ahmedabad-Gujarat.jpg"
          alt=""
          className="SfeaturedImg"
        />
        <div className="SfeaturedTitles">
          Ahmedabad
          <h6>3 properties</h6>
        </div>
      </div>
      <div className="SfeaturedItem">
        <img
          src="https://static.toiimg.com/photo/75012798/mumbai-live.jpg?width=748&resize=4"
          alt=""
          className="SfeaturedImg"
        />
        <div className="SfeaturedTitles">
          Mumbai
          <h6>4 properties</h6>
        </div>
      </div>
      <div className="SfeaturedItem">
        <img
          src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
          alt=""
          className="SfeaturedImg"
        />
        <div className="SfeaturedTitles">
          Delhi
          <h6>2 properties</h6>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Destinations;
