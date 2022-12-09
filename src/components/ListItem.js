import React from "react";

// for every passed trough the props it makes a <tr> element ands adds a delete button 
function ListItem(props) {
  return (
    <tr>
      <td>{props.song.title}</td>
      <td>{props.song.artist}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td>
        <button
          className="delete-button"
          onClick={(e) => props.removeSong(props.song.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default ListItem;
