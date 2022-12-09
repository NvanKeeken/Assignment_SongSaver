import React from "react";

// return dropdown menu for sorting songs by rating 
function SortRating(props) {
  return (
    <select className="song-sort" onChange={(e) => props.sortRating(e)}>
      <option>Sort rating</option>
      <option value="1-5">1-5</option>
      <option value="5-1">5-1</option>
    </select>
  );
}
export default SortRating;
