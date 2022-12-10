import React from "react"
import ListItem from "./ListItem"

// this function return  <tr> element for every song in state and adds it to table body 
function SongList (props){
    
return(
   <tbody className="song" >
   {props.songs.map(song=>{
    return <ListItem song={song} key={song.id} removeSong={props.removeSong}/>
   })}
   </tbody>
  
)
}

export default SongList