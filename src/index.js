import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Courses from './Courses';
import BulletinBoard from './BulletinBoards';
import Classrooms from './Classrooms';
import Leaderboards from './Leaderboards';
import Profile from './Profile';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
  
      <Route path='/' element={<Header/>}/>
      <Route path='Courses' element={<Courses/>}/>
      <Route path='Leaderboards' element={<Leaderboards/>}/>
      <Route path='Profile' element={<Profile/>}/>
      <Route path='Classrooms' element={<Classrooms/>}/>
      <Route path='BulletinBoard' element={<BulletinBoard/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
