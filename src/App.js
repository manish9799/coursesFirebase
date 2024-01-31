import { useEffect } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Courses from './Components/Courses';
import Dashboard from './Components/Dashboard';
import NotFoundPage from './Components/NotFoundPage';
import SideMenu from './Components/SideMenu';
import { Route, Routes } from 'react-router-dom';
import CourseDetails from './Components/CourseDetails';

function App() {

  return (
    <div  className="App">
        <SideMenu/>
        <Routes>
          <Route path='/' exact Component={Dashboard}/>
          <Route path='/courses'  Component={Courses}/>
          <Route path='/courses/detail/:id'  Component={CourseDetails}/>
          <Route path='/detail/:id'  Component={CourseDetails}/>
          <Route path='/*'  Component={NotFoundPage}/>
        </Routes>
    </div>
  );
}

export default App;
