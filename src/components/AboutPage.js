import React from "react"
import NavBar from "./NavBar"

function AboutPage (){
    return (
        <div>
        <NavBar/>
        <h2>About us</h2>

        <h3>About me</h3>
         <p>I choose this Frond-end development course at Winc Academy, because I wanted to combine my creative interest with a workfield 
            that has a lot of future job oppertunities.  
         </p>

        <h3>About the Assignment</h3>
        <p>The Assignment from Winc Academy was to build an application, where you can create your own playlist.
           The core functionalities are, that as a user I am able to enter the title, artist, genre and rating of my preffered song
           and add it to my playlist with one button. In addtion you had to choose from a list of functionalisties that each have a number 
           assigned to them, that should make a total of tree points. I choose to add delete buttons to remove a song from my playlist (1 point) and add
           a navigation bar with React Routing (2 points).
        </p>
         
        </div>
    )
}

export default AboutPage