import React from "react";

// function that return dropdown menu to sort by song title 
function SortTitle(props) {
  return (
    <select className="song-sort" onChange={(e) => props.sortTitle(e)}>
      <option>Sort title</option>
      <option value="a-z">a-z</option>
      <option value="z-a">z-a</option>
    </select>
  );
}

export default SortTitle;
