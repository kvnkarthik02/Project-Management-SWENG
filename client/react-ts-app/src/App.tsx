// import React from 'react';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE, USER_PROFILE_ROUTE } from './routing';

import Login from './components/Login';
// import Home from './components/Home';
import Projects from './pages/Projects';

import HomePage from './pages/HomePage';

interface Employee {
  name: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

const team: Employee[] = [
  {
    name: "Tim Kelly",
    role: "Senior Developer",
    workload: 6,
    capacity: 16,
    avatarColor: "red"
  }, {
    name: "Ben Vaughan",
    role: "Senior Developer",
    workload: 10,
    capacity: 16,
    avatarColor: "cyan"
  }, {
    name: "Johnny Shoe",
    role: "Senior Developer",
    workload: 13,
    capacity: 16,
    avatarColor: "yellow",
  }
]

const images = [
  "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  "https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const randomDescription = "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"



interface Project {
  name: string;
  description: string;
  badgeName: string;
  badgeColor: string;
  coverImgLink: string;
  projectPageLink: string;
  //   workload: number;
  //   capacity: number;
  //   avatarColor: string;
}

const projects: Project[] = [
  {
    name: 'Project I',
    description: randomDescription,
    badgeName: 'Frontend',
    badgeColor: "teal",
    coverImgLink: images[0],
    projectPageLink: ''
  },
  {
    name: 'Project II',
    description: randomDescription,
    badgeName: 'Backend',
    badgeColor: "orange",
    coverImgLink: images[1],
    projectPageLink: ''
  },
  {
    name: 'Project III',
    description: randomDescription,
    badgeName: 'Devops',
    badgeColor: "purple",
    coverImgLink: images[2],
    projectPageLink: ''
  }, {
    name: 'Project IV',
    description: randomDescription,
    badgeName: 'CI/CD',
    badgeColor: "red",
    coverImgLink: images[3],
    projectPageLink: ''
  }
]


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOMEPAGE} element={<HomePage team={team} projects={projects} />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.PROJECTS} element={<Projects />} />
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
