import React from "react";
import SongOverview from "../../SongOverview";
import NavBar from "./NavBar";

// this is the page where you see the assignment itself and the nav-bar at the top
function AssignmentPage() {
  return (
    <div>
      <NavBar />
      <SongOverview />
    </div>
  );
}

export default AssignmentPage;
