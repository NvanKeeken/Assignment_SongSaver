import React from "react"
import SongOverview from "../SongOverview"
import NavBar from "./NavBar"

function AssignmentPage (){
    return (
        <div>
         <NavBar/>
         <header><h1> Winc playlist</h1></header>
         <SongOverview/>
        </div>
    )
}

export default AssignmentPage