import React from "react"

function ListItem (props){
    return(
        
        <tr >  
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.rating}</td>
        </tr>
        
    )
}
export default ListItem