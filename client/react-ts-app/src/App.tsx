// import React from 'react';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE, USER_PROFILE_ROUTE } from './routing';

import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import PrivateRoute, { ProtectedRouteProps } from './contexts/PrivateRoute';
import { auth } from './firebase';

import { AuthProvider } from './contexts/AuthContextII'

interface Employee {
  name: string;
  email: string;
  role: string;
  workload: number;
  capacity: number;
  avatarColor: string;
}

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

const sampleTeam: Employee[] = [
  {
    name: "Tim Kelly",
    email: "tim@gmail.com",
    role: "Senior Developer",
    workload: 6,
    capacity: 16,
    avatarColor: "red"
  }, {
    name: "Johnny Shoe",
    email: "jshoe@tcd.ie",
    role: "Senior Developer",
    workload: 13,
    capacity: 16,
    avatarColor: "yellow",
  },
  {
    name: "Ben Vaughan",
    email: "ben@gmail.com",
    role: "Senior Developer",
    workload: 10,
    capacity: 16,
    avatarColor: "cyan"
  },
]

interface Skill {
  name: string;
  exp: number;
}


const sampleSkills: Skill[] = [
  {
    name: "Django",
    exp: 4
  }, {
    name: "React.js",
    exp: 2
  },
  {
    name: "Python",
    exp: 3
  },
  {
    name: "MongoDB",
    exp: 2
  },
]

const sampleTasks = [
  {
    name: 'API Configuration',
    subtasks: ['Add CRUD Functions', 'Build Models', 'Finish Controller Scripts'],
    teamMembers: ["Tim", "Ben", "John", "Karthik", "Zee", "Mani", "Robert"],
    avatarColors: ["grape", "red", "teal", "violet", "indigo", "cyan", "yellow", "orange"]
  },
  {
    name: 'Website Redesign',
    subtasks: ['Update Landing Page', 'Adjust Log-in Form'],
    teamMembers: ["John", "Ben", "Tim", "Karthik", "Zee", "Mani", "Robert"],
    avatarColors: ["cyan", "yellow", "orange", "grape", "red", "teal", "violet", "indigo"]
  },
  {
    name: 'Database Restructure',
    subtasks: ['Study Existing Database', 'Find areas to improve'],
    teamMembers: ["Zee", "Mani", "Robert", "Tim", "Ben", "John", "Karthik"],
    avatarColors: ["grape", "red", "teal", "violet", "cyan", "yellow", "orange", "indigo"]
  }
]




const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: !!auth.currentUser,
  authenticationPath: '/',
};


function App() {
  return (

    <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* <Route path={ROUTE.HOMEPAGE} element={<HomePage projects={projects} team={[]} />} /> */}
        <Route path={ROUTE.HOMEPAGE} element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<HomePage projects={projects} team={[]}/>}/>}/>
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.PROJECTS} element={<Projects />} />
        <Route path={ROUTE.PROJECT} element={<ProjectPage name={''} progress={60} team={sampleTeam} skills={sampleSkills} tasks={sampleTasks} />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
