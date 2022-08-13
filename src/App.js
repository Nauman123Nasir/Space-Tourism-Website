import './App.css';
import MainHeader from './mainheader/MainHeader';
import DestinationPage from './destination/DestinationPage';
import CrewPage from './crew/CrewPage';
import HomePage from './homePage/HomePage';
import TechnologyPage from './technology/TechnologyPage';
import {Routes, Route} from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className="App">
      <MainHeader/>
         <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route  path="/home" element={<HomePage/>}/>
              <Route  path="/destination" element={<DestinationPage/>}/>
              <Route  path="/crew" element={<CrewPage/>}/>
              <Route  path="/technology" element={<TechnologyPage/>}/>
         </Routes>
    </div>
  );
}

export default App;
