import React from "react"

function SortSection (props){
    
return(
    
    <select onChange={(e)=>props.sortTitle(e)}>
        <option >Sort</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
    </select>
)
}

export default SortSection