import React from "react"
import ListItem from "./ListItem"

function SongList (props){
    
return(
   <tbody>
   {props.songs.map(song=>{
    return <ListItem song={song} key={song.id} removeSong={props.removeSong}/>
   })}
   </tbody>
  
)
}

export default SongList