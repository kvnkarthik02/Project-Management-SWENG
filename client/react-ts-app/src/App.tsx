// import React from 'react';
import * as React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { ROUTE } from './routing';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Projects from './pages/Projects';
import Members from './pages/Members';
import ProjectPage from './pages/ProjectPage';
import { useState } from 'react';
import { OverlayContext } from "./OverlayContext";
import Project from './pages/Project';
import PrivateRoute, { ProtectedRouteProps } from './contexts/PrivateRoute';
import { auth } from './firebase';

import { AuthProvider } from './contexts/AuthContextII'


const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: !!auth.currentUser,
  authenticationPath: '/login',
};

function App() {

  // const [team, setTeam] = useState<Employee[]>();
  const [overlay, setOverlay] = useState(false);
  const isAdmin = true;
  // const isAdmin = false;
  return (
    <OverlayContext.Provider value={[overlay, setOverlay]}>
      <Router>
        <Routes>
          <Route path="/projects/" element={<Projects isAdmin={isAdmin} />} />
          <Route path="/members/" element={<Members isAdmin={isAdmin} team={[]} />} />
          <Route path="/project/:projectId" element={<Project isAdmin={isAdmin} />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </Router>

    </OverlayContext.Provider >

  );
}

export default App;
