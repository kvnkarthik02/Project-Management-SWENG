// import React from 'react';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE, USER_PROFILE_ROUTE } from './routing';

import Login from './components/Login';
// import Home from './components/Home';
import Project from './pages/Projects';

import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOMEPAGE} element={<HomePage />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.PROJECTS} element={<Project />} />
        {/* <Route path={ROUTE.PLAYGROUND} element={<Playground />} /> */}
        {/* <Route path={ROUTE.USERS} element={<Users />} />
        <Route path={ROUTE.USER_PROFILE} element={<UserProfile />}>
          <Route
            path={USER_PROFILE_ROUTE.USER_ACTIVITY}
            element={<UserActivity />}
          />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
