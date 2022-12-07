import React from "react"

function ListItem (props){
    console.log(props)
    return(
       
        <tr >  
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.rating}</td>
            <td><button onClick={(e)=>props.removeSong(props.song.id)}>Delete</button></td>
        </tr>
        
    )
}
export default ListItem