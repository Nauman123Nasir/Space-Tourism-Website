import './CrewPage.scss'
import data from "../data.json";
import TabComponent from './tabComponent/TabComponent';
import React from 'react';

const CrewPage = () => {
  return (
    <div className="crewPage">
    <div className='crewPageContainer'>
        <TabComponent/>
    </div>
  </div>
  );
}

export default CrewPage;