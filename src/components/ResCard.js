import {CDN_URL} from "../utils/constant";

const ResCard = ({ 
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla
  }) =>{
  
      return (
      <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>
          <img className="res-logo" 
          src = {CDN_URL + cloudinaryImageId}
          alt="Meghna img"></img>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} mins.</h4> 
      </div>)
  }
  export default ResCard;