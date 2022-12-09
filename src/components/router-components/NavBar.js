import React from "react";

// This function returns nav-bar that is showed at both pages. When the link is clicked, it'll bring the user
// to pages via the path determined in App router
function NavBar() {
  return (
    <div className="nav-bar">
      <h1>Song Saver</h1>
      <ul>
        <li className="nav-bar__item">
          <a href="http://localhost:3000/About">About</a>
        </li>
        <li className="nav-bar__item">
          <a href="http://localhost:3000">My playlist</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
