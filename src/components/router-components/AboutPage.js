import React from "react";
import NavBar from "./NavBar";

// returns content off the about page with nav-bar at the top
function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="about-content">
        <h2>About us</h2>
        <p>
          I choose this Frond-end development course at Winc Academy, because I
          wanted to combine my creative interests with a workfield that has a lot
          of job oppertunities.
        </p>
        <p>
          The Assignment from Winc Academy was to build an application, where
          you can create your own playlist. The core functionalities are, that
          as a user I am able to enter the title, artist, genre and rating of my
          preffered song and add it to my playlist with one button. In addtion
          you had to choose from a list of functionalities that each have a
          number assigned to them, that should make a total of tree points. I
          choose to add delete buttons to remove a song from my playlist (1
          point) and add a navigation bar with React Routing (2 points).
          Additionally I added two sorting functions (1 point) to challenge myself and to increase my
          chances to pass this assignment.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
