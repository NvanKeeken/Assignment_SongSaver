import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./AboutPage";
import AssignmentPage from "./AssignmentPage";

// Additional function (2 points)

// This function determines the diffrent paths where you can find the assignment and the about me page.
// The assignment itself can be found at the default path and and the about us page add /About
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<AboutPage />} />
        <Route path="" element={<AssignmentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
